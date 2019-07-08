
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
