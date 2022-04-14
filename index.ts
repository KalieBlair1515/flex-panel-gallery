const panels = document.querySelectorAll<HTMLElement>(".panel")

function toggleOpen(element: HTMLElement) {
    element.classList.toggle("open");
}

function toggleActive(element: HTMLElement, event: TransitionEvent) {
    if(event.propertyName.includes("flex")) {
        element.classList.toggle("open-active");
    }
}
panels.forEach(panel => panel.addEventListener("click", () => toggleOpen(panel)))
panels.forEach(panel => panel.addEventListener("transitionend", (ev: TransitionEvent) => toggleActive(panel, ev)))
