const container = document.getElementById("container");
const result = document.getElementById("result");

function updateCount() {
    result.innerText = "Total Students : " + container.children.length;
}

updateCount();

const deleteButtons = document.querySelectorAll(".deleteBtn");

for (let button of deleteButtons) {
    button.addEventListener("click", function () {
        this.closest(".card").remove();
        updateCount();
    });
}

const favoriteButtons = document.querySelectorAll(".favoriteBtn");

for (let button of favoriteButtons) {
    button.addEventListener("click", function () {
        this.closest(".card").classList.toggle("favorite")
    });
}


const nextBtn = document.querySelectorAll(".nextBtn")

for (let button of nextBtn) {
  button.addEventListener("click", function () {

    let currentCard = this.closest(".card")           
    let nextCard = currentCard.nextElementSibling     

    if (nextCard) {
      alert("Next Student: " + nextCard.children[0].innerText)
    } else {
      alert("No next student")
    }

  })
}