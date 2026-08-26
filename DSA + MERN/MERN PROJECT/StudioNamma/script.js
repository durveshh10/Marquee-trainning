const box = document.querySelector('.cursor-box');

document.querySelector('.hero').addEventListener('mousemove', (e) => {

    box.style.left = e.clientX + 'px';
    box.style.top = e.clientY + 'px';
    box.style.visibility = 'visible';
    box.style.transition = "linear 0.3s";
    pointer.style.visibility = 'hidden';

});

document.querySelector('.hero').addEventListener('mouseleave', () => {

    box.style.visibility = 'hidden';
    pointer.style.visibility = 'visible';

});


// box.addEventListener('click', () => {
//     box.classList.toggle('active');
// });


const fixedMenu = document.querySelector('.fixed-menu');
const menuBtn = document.querySelector('#menuBtn');

menuBtn.addEventListener('click', () => {

    const isOpen = fixedMenu.style.top === "0%";

    fixedMenu.style.top = isOpen ? '-100%' : '0';

});


const pointer = document.querySelector('.pointer');

document.addEventListener('mousemove', (e) => {

    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
    pointer.style.transition = "linear 0.1s";

});


const text1 = document.querySelector(".box1");

text1.addEventListener("mouseenter", () => {

    pointer.textContent = "Jai Bihar";
    pointer.style.width = "150px";
    pointer.style.height = "20px";
    pointer.style.padding = "20px";
    pointer.style.color = "white";
    pointer.style.backgroundColor = "black";
    pointer.style.fontSize = "15px";
    pointer.style.textAlign = "center";
    pointer.style.borderRadius = "8px";

});


text1.addEventListener("mouseleave", () => {

    pointer.textContent = "";
    pointer.style.width = "20px";
    pointer.style.height = "20px";
    pointer.style.padding = "0px";
    pointer.style.borderRadius = "50%";
    pointer.style.backgroundColor = "black";

});


const text2 = document.querySelector(".box2");

text2.addEventListener("mouseenter", () => {

    pointer.textContent = "SONA";
    pointer.style.width = "150px";
    pointer.style.height = "20px";
    pointer.style.padding = "20px";
    pointer.style.color = "white";
    pointer.style.backgroundColor = "green";
    pointer.style.fontSize = "15px";
    pointer.style.textAlign = "center";
    pointer.style.borderRadius = "8px";

});


text2.addEventListener("mouseleave", () => {

    pointer.textContent = "";
    pointer.style.width = "20px";
    pointer.style.height = "20px";
    pointer.style.padding = "0px";
    pointer.style.borderRadius = "50%";
    pointer.style.backgroundColor = "black";

});


const trigger = document.querySelector(".hover-trigger");
const cards = document.querySelectorAll(".stack-card");

if (trigger && cards.length) {

    trigger.addEventListener("mouseenter", () => {

        cards.forEach(card => {
            card.classList.add("show");
        });

    });

    trigger.addEventListener("mouseleave", () => {

        cards.forEach(card => {
            card.classList.remove("show");
        });

    });

    const rotation = [-8,8,-6,6];

    cards.forEach((card, index) => {

        card.style.transform =
            `rotate(${rotation[index]}deg)`;

    });

}


/* Menu Hover Video */

const menuItems = document.querySelectorAll(".menu-item");
const previewCard = document.querySelector("#previewCard");
const previewVideo = document.querySelector("#previewVideo");

menuItems.forEach(item => {

    const desc = item.querySelector(".description");

    desc.textContent = item.dataset.desc;

    item.addEventListener("mouseenter", () => {

        previewCard.classList.add("active");

        previewVideo.src = item.dataset.video;

        previewVideo.playbackRate = 3.0;

        previewVideo.play();

    });

    item.addEventListener("mouseleave", () => {

        previewCard.classList.remove("active");

        previewVideo.pause();

    });

});