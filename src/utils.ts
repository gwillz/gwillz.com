

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
