import { AeroElement } from "./AeroElement.js";
import { AeroUtilities } from "./AeroUtilities.js";
import { Icon } from "./Icon.js";
import { WebPage } from "./WebPage.js";
import { WebPageV2 } from "./WebPageV2.js";


// Using ES6 import syntax
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/es/highlight.min.js';
//  and it's easy to individually load additional languages
import java from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/es/languages/java.min.js';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/es/languages/xml.min.js';





/*
    Turn this:
        {
        _type: "aero-slide-prime",
        theme: "dark",
        title: `The power of <b>tomorrow</b>`,
        subtitle: "Hi There",
        paragraph: `this is a very 
        long text indeed that spread on multiple lines`,
        background : {
            _type : "pic",
            source : "assets/truc0002.jpg"
        }
    },

    into this:

    <section class="aero-slide-prime aero-theme-dark background-black">
        <div class="text">
            <h1>Say Hello to <span class="emphasis">OCTOFAN</span></h1>
            <h2>The world's first H2-powered multirole heavy duty drone with
                switchable nacelles</h2>
        </div>
        <div class="asset"
            style="background-image: url('assets/aircrafts/freighter/render0x07-low.png');">
        </div>
    </section>
*/



export const LOW_RESOLUTION_TAG = "-low";
export const HIGH_RESOLUTION_TAG = "-high";

export class TextBlockV2 extends AeroElement {

    /** @type {HTMLElement } */
    sectionNode;

    type;

    /**
     * @type{List<TextBlockElement>}
     */
    elements = new Array();

    /** @type{boolean} */
    hasBackgroundImage = false;

    /** @type{boolean} */
    isBackgroundImageLoaded = false;

    /** @type{string} */
    backgroundImagePath;

    /** @type{boolean} */
    hasAssetImage = false;

    /** @type{boolean} */
    isAssetImageLoaded = false;

    /** @type{string} */
    assetImagePath;

    /** @type {HTMLDivElement} */
    assetNode;


    /**
     * 
     * @param {WebPageV2} page 
     * @param {HTMLElement} sources 
     */
    constructor(page, sources){
        super();

        /* CSS requirements */
        page.css_requireStylesheet("/aero/TextBlock.css");

        /* build nodes */
        this.sectionNode = document.createElement("section");
        this.sectionNode.classList.add("textblock");

        let val;
        this.type = (val = sources.getAttribute("type")) ? val : "std";
        this.sectionNode.setAttribute("type", this.type);

        this.theme = (val = sources.getAttribute("theme")) ? val : "light";
        this.sectionNode.setAttribute("theme", this.theme);

        this.arrangement = (val = sources.getAttribute("arrangement")) ? val : "std";
        this.sectionNode.setAttribute("arrangement", this.arrangement);

        /* <id> */
        if (sources.id != undefined) {  this.sectionNode.id = sources.id; }
        /* </id> */


        /* <background> */
        if (val = sources.getAttribute("backgroundColor")) {
            switch (val) {
                case "black": this.sectionNode.classList.add("background-black"); break;
                case "white": this.sectionNode.classList.add("background-white"); break;
                case "grey64": this.sectionNode.classList.add("background-grey64"); break;
                case "grey128": this.sectionNode.classList.add("background-grey128"); break;
                case "grey192": this.sectionNode.classList.add("background-grey192"); break;
            }
        }
        else if (val = sources.getAttribute("backgroundGradient")) {
            /* ee */
            page.css_requireStylesheet("/aero/gradient-backgrounds.css");
            this.sectionNode.classList.add("aero-background-gradient-" + val);
        }
        else if (val = sources.getAttribute("backgroundImage")) {
            this.sectionNode.classList.add("background-pic");
            AeroUtilities.loadBackgroundImage(this.sectionNode, val, () => this.render(page));
        }
        /* </background> */


        /* <elements> */
        let node = sources.firstChild;
        while(node){
            let type = node.nodeName.toLowerCase();
            switch(type){
                case "h1" : this.elements.push(new TxBkHeader1(page, node)); break;
                case "h2" : this.elements.push(new TxBkHeader2(page, node)); break;
                case "p" : this.elements.push(new TxBkParagraph(page, node)); break;
                case "svg" : this.elements.push(new TxBkSVG(page, node)); break;
                case "code" : this.elements.push(new TxBkCode(page, node)); break;
            }

            node = node.nextSibling;
        }

        this.elements.forEach(element => this.sectionNode.appendChild(element.html_getNode()));
        /* </elements> */
    }


    html_getNode(){ 
        /* return wrapper node */
        return this.sectionNode;
    }



    /**
     * 
     * @param {WebPage} page 
     */
    render(page) {
        if (!this.isInitialized) {
            this.draw();
            this.isInitialized = true;
        }
        else if (this.isInitialized && page.imageResolution == 1) {
            this.redrawHighRes();
        }
    }

    draw() {

    }

}

export class TextBlockElement {

    constructor(sources) {
    
    }

}

export class TxBkHeader1 extends TextBlockElement {

    constructor(page, sources) {
        super(sources);

        const headerNode = document.createElement("h1");
        //if (this.isMobileHideable) { headerNode.classList.add("txbk-mobile-hideable"); }
        headerNode.innerHTML = sources.innerHTML;
        this.headerNode = headerNode;
    }

    html_getNode() { return this.headerNode; }
}


export class TxBkHeader2 extends TextBlockElement {

    constructor(page, sources) {
        super(sources);
        const headerNode = document.createElement("h2");
        //if (this.isMobileHideable) { headerNode.classList.add("txbk-mobile-hideable"); }
        headerNode.innerHTML = sources.innerHTML;
        this.headerNode = headerNode;
    }

    html_getNode() { return this.headerNode; }
}


export class TxBkParagraph extends TextBlockElement {

    constructor(page, sources) {
        super(sources); 
        const headerNode = document.createElement("p");
        //if (this.isMobileHideable) { headerNode.classList.add("txbk-mobile-hideable"); }
        headerNode.innerHTML = sources.innerHTML;
        this.headerNode = headerNode;
    }

    html_getNode() { return this.headerNode; }
}


export class TxBkSVG extends TextBlockElement {

    constructor(page, sources) {
        super(sources);
        this.pathname = sources.getAttribute("path");

        const wrapperNode = document.createElement("div");
        wrapperNode.classList.add("textblock-pic-svg");
        //if (this.isMobileHideable) { headerNode.classList.add("txbk-mobile-hideable"); }
    
        let val;
        const width = (val = sources.getAttribute("width")) ? parseInt(val) : 128;
        const height = (val = sources.getAttribute("height")) ? parseInt(val) : 128;
        this.icon = new Icon(this.pathname, { width: width, height: height }); 
        wrapperNode.appendChild(this.icon.build());

        this.wrapperNode = wrapperNode;
    }

    html_getNode() { return this.wrapperNode; }

}


export class TxBkCode extends TextBlockElement {

    static isLanguageLoaded = false;

    /**
     * 
     * @param {WebPageV2} page 
     * @param {HTMLElement} sources 
     */
    constructor(page, sources){
        super(sources);

        this.sourcePathname = sources.getAttribute("path");

        if (!this.isLanguageLoaded) {

            // Then register the languages you need
            hljs.registerLanguage('java', java);
            hljs.registerLanguage('xml', xml);
            this.isLanguageLoaded = true;
        }

        //page.css_requireStylesheet("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/default.min.css");
        page.css_requireStylesheet("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/atom-one-dark.css");

      
        const wrapperNode = document.createElement("div");
        wrapperNode.classList.add("txbk-code-section");

        const windowNode = document.createElement("div");
        windowNode.classList.add("txbk-code-window");
       // windowNode.classList.add("theme-atom-one-dark");

        const preNode = document.createElement("pre");
        //preNode.classList.add("theme-atom-one-dark");

        const spanNode = document.createElement("span");
        //spanNode.classList.add("language-java");
       // spanNode.classList.add("hljs");

        const codeNode = document.createElement("code");
        //codeNode.innerHTML = highlightedCode;
       

        spanNode.appendChild(codeNode);
        preNode.appendChild(spanNode);
        windowNode.appendChild(preNode);
        wrapperNode.appendChild(windowNode);

        AeroUtilities.getResourceFromOrigin(this.sourcePathname, "text", sourceCode => {
            const highlightedSourceCode = hljs.highlight(sourceCode, { language: 'java' }).value;
            codeNode.innerHTML = highlightedSourceCode;
        })

        this.wrapperNode = wrapperNode;
    }


    html_getNode() { return this.wrapperNode; }


    /**
     * 
     * @param {WebPage} page 
     */
    render(page) {
        /* do nothing */
    }
}
