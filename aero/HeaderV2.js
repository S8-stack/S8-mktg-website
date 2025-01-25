import { AeroElement } from "./AeroElement.js";
import { WebPage } from "./WebPage.js";
import { clearChildNodes } from "./aero.js";

/*
export const MENUS = ["Home", "Technology", "Applications", "Team", "Contact"];
export const HREF = ["/index.html", "/technology.html", "/applications.html", "/team.html", "/contact.html"];
*/

/**
 * 
 */
export class HeaderV2 extends AeroElement {

    /** @type{HTMLHeadElement} */
    headerNode;

     /**
     * @type{Array<AeroElement>}
     */
     menus = new Array();

    /**
     * @type {boolean}
     */
    isNavVisible;


    /**
     * @type{String} 
     * Color of the flat elements (icon/logo)
     */
    flatColor;

    /**
     * 
     * @param {HTMLElement} sources 
     */
    constructor(page, sources) {
        super();

        this.flatColor = "black";
        let val;
        this.theme = (val = sources.getAttribute("theme")) ? val : "light";
        switch (this.theme) {
            default:
            case "light": this.flatColor = "black"; break;
            case "dark": this.flatColor = "white"; break;
        }

        this.logo = (val = sources.getAttribute("logo")) ? val : "light";

        /* CSS requirements */
        page.css_requireStylesheet("/aero/Header.css");

        /* build nodes */
        this.headerNode = document.createElement('header');
        this.headerNode.setAttribute("theme", this.theme);
        this.isLandscape = page.isLandscape;

        /* build menus */
        let node = sources.firstChild;
        while (node) {
            if (node.nodeName.toLowerCase() == "menu") { 
                this.menus.push(new Menu(node));
            }

            /* save next node */
            node = node.nextSibling;
        }

        this.draw(page, sources);
    }


    /**
     * 
     * @param {WebPage} page 
     * @param {HTMLElement} sourceNode 
     * 
     * @returns {HTMLElement}
     */
    html_getNode() {

        /* return wrapper node */
        return this.headerNode;
    }

    load() { /* nothing to load here */ }

    /**
     * 
     * @param {WebPage} page 
     * @returns {}
     */
    render(page) {
        if (page.isLandscape != this.isLandscape) { // repaint
            this.isLandscape = page.isLandscape;
            clearChildNodes(this.headerNode);
            this.draw();
        }
    }

    draw() {

        const placeholderNode = document.createElement("div");
        placeholderNode.classList.add("aero-header-placeholder");
        this.headerNode.appendChild(placeholderNode);

        const barNode = document.createElement("div");
        barNode.classList.add("aero-header-bar");

        if (this.isLandscape) {
            this.drawLandscape(barNode);
        }
        else {
            this.drawPortrait(barNode);
        }
        this.headerNode.appendChild(barNode);



        let lastKnowScrollY = 0;
        let deltaScrollY = 0;
        let upwardDeltaScrollY = 0;
        let ticking = false;
        let barPositionY = 0;
        let previousMove = 0; /* O :undefined, -1:upward, +1:downward */


        const udpateBarPosition = function (y) { barNode.style.top = `${y}px`; }

        window.addEventListener("scroll", function (e) {
            deltaScrollY = window.scrollY - lastKnowScrollY;
            lastKnowScrollY = window.scrollY;

            if (deltaScrollY < 0) { /* going upward, deltaScrollY < 0  */
                //if(previousMove != -1){ barPositionY = -68; }
                barPositionY -= deltaScrollY;

                //previousMove = -1;
            }
            else { /* downward, deltaScrollY > 0 */
                barPositionY -= deltaScrollY;

                //previousMove = 1;
            }
            if (barPositionY > 0) { barPositionY = 0; }
            if (barPositionY < -64) { barPositionY = -64; }
            console.log(`upwardDeltaScrollY: ${upwardDeltaScrollY}`);

            if (!ticking) {
                window.requestAnimationFrame(function () {
                    udpateBarPosition(barPositionY);
                    ticking = false;
                });
            }

            ticking = true;
        });
    }


    drawLandscape(barNode) {

        /* <front-icon> */
        let menuLogoNode = document.createElement("div");
        menuLogoNode.classList.add("menu-logo");
        let frontImgNode = document.createElement("img");
        frontImgNode.src = this.logo;
        frontImgNode.alt = "logo";
        menuLogoNode.appendChild(frontImgNode);
        barNode.appendChild(menuLogoNode);
        /* </front-icon> */

        /* <nav> */
        barNode.appendChild(this.buildNavNode());
        /* </nav> */

        /* <login-icon> */
        //this.headerNode.appendChild(this.buildLoginNode());
        /* </login-icon> */
    }


    drawPortrait(barNode) {

        let iconsWrapperNode = document.createElement("div");
        iconsWrapperNode.classList.add("aero-menu-icons-wrapper");

        /* <menu-handler-icon> */
        let menuHandlerNode = document.createElement("div");
        menuHandlerNode.classList.add("menu-handler");
        let menuHandlerImgNode = document.createElement("img");
        menuHandlerImgNode.src = `/icons/menu-${this.flatColor}.svg`;
        menuHandlerImgNode.alt = "menu";
        menuHandlerNode.appendChild(menuHandlerImgNode);
        iconsWrapperNode.appendChild(menuHandlerNode);
        /* </menu-handler-icon> */

        /* <logo-icon> */
        let menuLogoNode = document.createElement("div");
        menuLogoNode.classList.add("menu-logo");
        let frontImgNode = document.createElement("img");
        frontImgNode.src = this.logo;
        frontImgNode.alt = "logo";
        menuLogoNode.appendChild(frontImgNode);
        iconsWrapperNode.appendChild(menuLogoNode);
        /* </logo-icon> */

        barNode.appendChild(iconsWrapperNode);

        let navNode = this.buildNavNode();

        barNode.appendChild(navNode);

        this.isNavVisible = false; // hidden by default in portrait
        let _this = this;
        menuHandlerNode.addEventListener("click", function () {
            navNode.style.visibility = _this.isNavVisible ? "hidden" : "visible";
            _this.isNavVisible = !_this.isNavVisible;
        }, false);

        /* <login-icon> */
        //iconsWrapperNode.appendChild(this.buildLoginNode());
        /* </login-icon> */
    }



    buildNavNode() {

        /* <nav> */
        let navNode = document.createElement('nav');
        let unorderedListNode = document.createElement('ul');
        this.menus.forEach(menu => unorderedListNode.appendChild(menu.html_getNode()));
        navNode.appendChild(unorderedListNode);
        /* </nav> */

        return navNode;
    }


    buildLoginNode() {
        /* <login-icon> */
        const loginNode = document.createElement("a");

        loginNode.href = "https://app.alphaventor.com";

        loginNode.classList.add("menu-login");
        let loginImgNode = document.createElement("img");
        loginImgNode.src = `/icons/login-${this.flatColor}.svg`;
        loginImgNode.alt = "login";
        loginNode.appendChild(loginImgNode);
        return loginNode;
        /* </login-icon> */
    }

    /**
   * 
   * @param {AeroWebPage} page 
   */
    link(page) {
        this.page = page;
        page.import_CSS("aero/AeroHeader.css");
    }

    isLoaded() {
        return this.isInitialized;
    }
}


class Menu {

    constructor(source){
        let listItemNode = document.createElement('li');
        listItemNode.classList.add("aero-header-menu")

        let isSelected = (source.getAttribute("selected") != undefined);
        if (isSelected) {
            listItemNode.setAttribute("selected", "");
        }

        let aNode = document.createElement("a");
        aNode.href = isSelected ? "/" : source.getAttribute("to");
        aNode.innerHTML = source.innerHTML;
        listItemNode.appendChild(aNode);
        this.listItemNode = listItemNode;
    }


    html_getNode(){
        return this.listItemNode;
    }

}