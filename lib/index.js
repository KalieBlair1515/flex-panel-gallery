"use strict";
const panels = document.querySelectorAll(".panel");
function toggleOpen(element) {
    element.classList.toggle("open");
}
function toggleActive(element, event) {
    if (event.propertyName.includes("flex")) {
        element.classList.toggle("open-active");
    }
}
panels.forEach(panel => panel.addEventListener("click", () => toggleOpen(panel)));
panels.forEach(panel => panel.addEventListener("transitionend", (ev) => toggleActive(panel, ev)));
//# sourceMappingURL=index.js.map