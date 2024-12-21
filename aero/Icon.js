import { AeroUtilities } from "./AeroUtilities.js";




export class Icon {

    constructor(pathname, props) {
        this.pathname = pathname;
        this.props = props;

        this.width = props.width ? props.width : 64;
        this.height = props.height ? props.height : 64;

    }

    build() {

        this.wrapperNode = document.createElement("div");

        AeroUtilities.sendRequest_HTTP_GET(this.pathname, "text", responseText => {
            this.wrapperNode.innerHTML = responseText;
            let svgNode = this.wrapperNode.getElementsByTagName("svg")[0];
            svgNode.setAttribute("width", this.width);
            svgNode.setAttribute("height", this.height);
            this.svgNode = svgNode;
            this.isSVGNodeLoaded = true;
        });
    }

    getEnvelope(){ return this.wrapperNode; }



}