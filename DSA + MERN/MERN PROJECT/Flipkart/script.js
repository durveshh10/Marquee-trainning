/* CART */

let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");
}


function showCart() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert("You have " + cartCount + " item(s) in your cart.");
    }
}


/* LIKE */

function likeProduct(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.textContent = "♥";
    } else {
        button.textContent = "♡";
    }
}


/* LOGIN POPUP */

function openLogin() {

    document.getElementById("loginModal").style.display = "flex";
}


function closeLogin() {

    document.getElementById("loginModal").style.display = "none";
}


function loginUser() {

    const mobile = document.getElementById("mobileNumber").value;

    if (mobile.length === 10 && !isNaN(mobile)) {

        alert("Login successful!");

        closeLogin();

    } else {

        alert("Please enter a valid 10-digit mobile number.");

    }
}


/* LOCATION POPUP */

function openLocation() {

    document.getElementById("locationModal").style.display = "flex";
}


function closeLocation() {

    document.getElementById("locationModal").style.display = "none";
}


function checkPincode() {

    const pincode = document.getElementById("pincode").value;
    const message = document.getElementById("locationMessage");

    if (pincode.length === 6 && !isNaN(pincode)) {

        message.textContent = "Delivery available at " + pincode;
        message.style.color = "green";

    } else {

        message.textContent = "Please enter a valid 6-digit pincode.";
        message.style.color = "red";

    }
}


/* SEARCH */

function searchProducts() {

    const searchText =
        document.getElementById("searchInput").value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");

    if (searchText === "") {

        products.forEach(function(product) {
            product.style.display = "block";
        });

        return;
    }

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


/* SEARCH WHEN PRESSING ENTER */

document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });


/* FILTER */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

    window.scrollTo({
        top: document.getElementById("productGrid").offsetTop - 100,
        behavior: "smooth"
    });
}


/* BANNER SLIDER */

const banners = [

    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"

];

let currentBanner = 0;


function showBanner() {

    document.getElementById("bannerImage").src =
        banners[currentBanner];

}


function nextSlide() {

    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    showBanner();
}


function previousSlide() {

    currentBanner--;

    if (currentBanner < 0) {
        currentBanner = banners.length - 1;
    }

    showBanner();
}


/* AUTO SLIDE */

setInterval(function() {

    nextSlide();

}, 4000);


/* CLOSE POPUPS WHEN CLICKING OUTSIDE */

window.onclick = function(event) {

    const loginModal =
        document.getElementById("loginModal");

    const locationModal =
        document.getElementById("locationModal");

    if (event.target === loginModal) {
        closeLogin();
    }

    if (event.target === locationModal) {
        closeLocation();
    }

};