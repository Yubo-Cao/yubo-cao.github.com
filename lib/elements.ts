function getIndex(el: Element): number {
    let parent = el.parentElement,
        child = parent?.firstChild;
    if (!parent || !child) return -1;
    let idx = 0;
    while (child) {
        if (child.nodeType === Node.ELEMENT_NODE) idx++;
        if (child === el || !child.nextSibling) break;
        child = child.nextSibling;
    }
    return idx;
}

function isFirstChild(el: Element): boolean {
    let parent = el.parentElement,
        child = parent?.firstChild;
    if (!parent || !child) return false;
    return child === el;
}

function isLastChild(el: Element): boolean {
    let parent = el.parentElement,
        child = parent?.lastChild;
    if (!parent || !child) return false;
    return child === el;
}

function isEvenChild(el: Element): boolean {
    let idx = getIndex(el);
    if (idx === -1) return false;
    return idx % 2 === 0;
}

function isOddChild(el: Element): boolean {
    let idx = getIndex(el);
    if (idx === -1) return false;
    return idx % 2 === 1;
}

function isParentMain(el: Element): boolean {
    let parent = el.parentElement;
    if (!parent) return false;
    return parent.tagName === "MAIN";
}

function isParentRoot(el: Element): boolean {
    let parent = el.parentElement;
    if (!parent) return false;
    return parent.tagName === "ROOT";
}

export {
    getIndex,
    isEvenChild,
    isOddChild,
    isParentMain,
    isParentRoot,
    isLastChild,
    isFirstChild
};
