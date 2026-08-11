// Cache the elements we need to control the custom cursor and menu.
const heroSection = document.querySelector(".hero");
const pointer = document.querySelector(".pointer");
const cursorBox = document.querySelector(".cursor-box");
const menuButton = document.querySelector(".menu-btn");
const fixedMenu = document.querySelector(".fixed-menu");

// Keep the hero pinned to the top when the page loads or restores scroll.
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

// Keep the floating preview inside the hero and the blue dot everywhere else.
function updatePointerState(event) {
    const heroBounds = heroSection.getBoundingClientRect();
    const isInsideHero =
        event.clientX >= heroBounds.left &&
        event.clientX <= heroBounds.right &&
        event.clientY >= heroBounds.top &&
        event.clientY <= heroBounds.bottom;

    if (isInsideHero) {
        // Hide the blue pointer and show the preview video while over the hero.
        pointer.classList.add("is-hidden");
        cursorBox.style.opacity = "1";
        cursorBox.style.left = `${event.clientX}px`;
        cursorBox.style.top = `${event.clientY}px`;
    } else {
        // Bring the blue pointer back once the cursor leaves the hero area.
        pointer.classList.remove("is-hidden");
        cursorBox.style.opacity = "0";
        pointer.style.left = `${event.clientX}px`;
        pointer.style.top = `${event.clientY}px`;
    }
}

// Update the cursor position on every mouse or pointer move.
document.addEventListener("pointermove", updatePointerState);
document.addEventListener("mousemove", updatePointerState);

// If the pointer leaves the window, reset the preview state.
window.addEventListener("pointerleave", () => {
    pointer.classList.remove("is-hidden");
    cursorBox.style.opacity = "0";
});

// Toggle the full-screen menu overlay.
menuButton.addEventListener("click", () => {
    fixedMenu.classList.toggle("is-open");
    fixedMenu.setAttribute(
        "aria-hidden",
        String(!fixedMenu.classList.contains("is-open")),
    );
});

const boxtext = document.querySelector(".box-cont");
boxtext.addEventListener("mousemove", () => {
    pointer.textContent = "MATERA";

    pointer.style.width = "150px";
    pointer.style.height = "20px";
    pointer.style.padding = "20px";
    pointer.style.color = "white";
    pointer.style.fontFamily = "sans-serif";
    pointer.style.fontWeight = "700";
    pointer.style.fontSize = "25px";
    pointer.style.textAlign = "center";
    pointer.style.borderRadius = "8px";
});
boxtext.addEventListener("mouseleave", () => {
    pointer.textContent = "";
    pointer.style.borderRadius = "50%";
    pointer.style.width = "20px";
    pointer.style.height = "20px";
    pointer.style.padding = "0";
});


// const trigger = document.querySelector(".hover-trigger");
// const card = document.querySelector(".stack-card");
// trigger.addEventListener("mouseenter", () => {
//     card.classList.add("show");
// });
// trigger.addEventListener("mouseleave", () => {
//     card.classList.remove("show");
// });

const trigger = document.querySelector(".hover-trigger")
const cards = document.querySelectorAll(".stack-card")
trigger.addEventListener("mouseenter", () => {
    cards.forEach((card) => {
        card.classList.add("show")
    })
    // card.classList.add("show")
})
trigger.addEventListener("mouseleave", () => {
    // card.classList.remove("show")
    cards.forEach((card) => {
        card.classList.remove("show")
    })
const rotation = [-8,8,-6,6]
cards.forEach((cardidx)=> {
card.style.transform = `rotate(${rotation [idx]}deg)`
})
})