
import { AeroElement } from "./AeroElement.js";

import { Deck } from "./Deck.js";
import { Footer } from "./Footer.js";
import { AeroGrid, AeroGridCard } from "./AeroGrid.js";
import { Header } from "./Header.js";
import { AeroMovie } from "./AeroMovie.js";
import { Slide } from "./Slide.js";
import { WebPage } from "./WebPage.js";


export const page = function (elements, props) {
    return new WebPage(elements, props);
}

export const header = function (props) {
    return new Header(props);
}

export const slide = function (type, props) {
    return new Slide(type, props);
}

export const movie = function (type, props) {
    return new AeroMovie(type, props);
}

export const deck = function (props) {
    return new Deck(props);
}

export const grid = function (type, props) {
    return new AeroGrid(type, props);
}

export const gridCard = function (type, props) {
    return new AeroGridCard(type, props);
}

export const footer = function (props) {
    return new Footer(props);
}




/**
 * 
 */
export class LoadHandler {

    /**
     * @type{Set<string>}
     */
    resources;

    /**
     * @param{function}
     */
    onLoaded = null;

    index = 0;

    constructor() {
        this.resources = new Set();
    }

    generateId() {
        return `generated-${this.index++}`;
    }

    registerLoading(name) {
        this.resources.add(name);
    }

    notifyCompleted(name) {
        this.resources.delete(name);
        if (this.onLoaded != null && this.resources.size == 0) {
            this.onLoaded();
        }
    }


    listenCompleted(onLoaded) {
        if (this.resources.size == 0) {
            onLoaded();
        }
        else {
            this.onLoaded = onLoaded;
        }
    }
}






/**
 * @param{HTMLDivElement} enveloppeNode
 */
export function clearChildNodes(enveloppeNode) {
    let child;
    while ((child = enveloppeNode.firstChild)) {
        enveloppeNode.removeChild(enveloppeNode.lastChild);
    }
}


