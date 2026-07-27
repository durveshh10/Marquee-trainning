const form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById('output').innerText = "Welcome " + name;
});

// box focus/blur
const box = document.getElementById("box");
box.addEventListener('focus', function () {
    box.style.background = "yellow";
});
box.addEventListener('blur', function () {
    box.style.background = "white";
});

// invalid
const username = document.getElementById('username');
username.addEventListener('invalid', function () {
    alert("Name Required");
});

// select
const fullName = document.getElementById('fullname');
fullName.addEventListener("select", function () {
    alert("Text Selected");
});
