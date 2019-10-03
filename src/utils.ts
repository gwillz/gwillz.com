
type Listener = (this: Element, event: Event) => void;

export function ready(cb: () => void) {
    if (document.readyState === "complete") {
        cb();
    }
    else {
        document.addEventListener("readystatechange", okay);
        window.addEventListener("load", okay);
    }
    
    function okay() {
        cb();
        document.removeEventListener("readystatechange", okay);
        window.removeEventListener("load", okay);
    }
}

ready.on = function readyOn(selector: string, type: string, cb: Listener) {
    ready(() => on(selector, type, cb));
}

export function on(selector: string, type: string, cb: Listener) {
    document.querySelectorAll(selector)
    .forEach(element => element.addEventListener(type, cb.bind(element), { passive: true }));
}

export function one(selector: string) {
    return document.querySelector(selector);
}

export function all(selector: string) {
    return Array.from(document.querySelectorAll(selector));
}


export default G;

function G(cb: Listener): void;
function G(selector: string): Element[];
function G(selector: string, type: string, cb: Listener): void;
function G(selector: any, type?: string, cb?: Listener) {
    if (typeof selector === "string") {
        if (type && cb) {
            ready.on(selector, type, cb);
        }
        else {
            return all(selector);
        }
    }
    else {
        ready(selector);
    }
    return;
}

G.ready = ready;
G.on = on;
G.one = one;
G.all = all;
