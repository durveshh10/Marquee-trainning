let cart = JSON.parse(localStorage.getItem("cart")) || [];
let editKey = null;

render(cart);

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addItem() {
  let name = document.getElementById("pname").value.trim();
  let price = document.getElementById("pprice").value;
  let qty = document.getElementById("pqty").value;
  let category = document.getElementById("pcategory").value;

  if (!name || !price || !qty || !category) {
    alert("Fill all fields!");
    return;
  }

  let item = {
    id: Date.now(),
    name: name,
    price: Number(price),
    qty: Number(qty),
    category: category
  };

  if (editKey == null) {
    cart.push(item);
  } else {
    let index = cart.findIndex(x => x.id == editKey);
    cart[index] = { ...item, id: editKey };
    editKey = null;
    document.getElementById("addBtn").innerHTML = "Add Item";
  }

  saveCart();
  render(cart);
  clearForm();
}

function render(arr) {
  let list = document.getElementById("list");
  list.innerHTML = "";

  if (arr.length === 0) {
    list.innerHTML = `<p class="empty-message">Your cart is empty 🛒</p>`;
  }

  arr.forEach(x => {
    list.innerHTML += `
      <div class="card">
        <h3>${x.name}</h3>
        <p><b>Price:</b> ₹${x.price}</p>
        <p><b>Qty:</b> ${x.qty}</p>
        <p><b>Category:</b> ${x.category}</p>
        <div class="actions">
          <button onclick="editItem(${x.id})">Edit</button>
          <button onclick="removeItem(${x.id})">Delete</button>
        </div>
      </div>
    `;
  });

  updateSummary();
}

function editItem(id) {
  let item = cart.find(x => x.id == id);
  document.getElementById("pname").value = item.name;
  document.getElementById("pprice").value = item.price;
  document.getElementById("pqty").value = item.qty;
  document.getElementById("pcategory").value = item.category;

  editKey = id;
  document.getElementById("addBtn").innerHTML = "Update Item";
}

function removeItem(id) {
  cart = cart.filter(x => x.id != id);
  saveCart();
  render(cart);
}

function searchItem() {
  let text = document.getElementById("searchBox").value.toLowerCase();
  let result = cart.filter(x => x.name.toLowerCase().includes(text));
  render(result);
}

function filterItem() {
  let cat = document.getElementById("filterBox").value;
  if (cat == "All") {
    render(cart);
    return;
  }
  let result = cart.filter(x => x.category == cat);
  render(result);
}

function sortCart(criteria) {
  let sorted = [...cart];
  if (criteria === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (criteria === "quantity") {
    sorted.sort((a, b) => a.qty - b.qty);
  }
  render(sorted);
}

function updateSummary() {
  document.getElementById("countItems").innerHTML = cart.length;
  let totalQty = cart.reduce((sum, x) => sum + x.qty, 0);
  document.getElementById("countQty").innerHTML = totalQty;
  let totalCost = cart.reduce((sum, x) => sum + (x.price * x.qty), 0);
  document.getElementById("totalCost").innerHTML = totalCost;
}

function resetCart() {
  if (confirm("Clear everything?")) {
    cart = [];
    saveCart();
    render(cart);
  }
}

function clearForm() {
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
  document.getElementById("pqty").value = "";
  document.getElementById("pcategory").value = "";
}
