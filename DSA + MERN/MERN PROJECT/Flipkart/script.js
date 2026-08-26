// ---------- Product Data (working Unsplash image links) ----------
const products = [
  {
    name: "Smartphone Pro Max",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    price: 499,
    oldPrice: 699,
    rating: 4.5
  },
  {
    name: "Ultrabook Laptop",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    price: 899,
    oldPrice: 1299,
    rating: 4.7
  },
  {
    name: "Wireless Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    price: 79,
    oldPrice: 149,
    rating: 4.3
  },
  {
    name: "Smartwatch Ultra",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    price: 199,
    oldPrice: 299,
    rating: 4.6
  },
  {
    name: "Gaming Monitor",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
    price: 249,
    oldPrice: 399,
    rating: 4.4
  },
  {
    name: "Mechanical Keyboard",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
    price: 59,
    oldPrice: 99,
    rating: 4.8
  },
  {
    name: "DSLR Camera",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80",
    price: 549,
    oldPrice: 799,
    rating: 4.6
  },
  {
    name: "Bluetooth Speaker",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    price: 45,
    oldPrice: 89,
    rating: 4.2
  }
];

// ---------- Render Product Grid ----------
const productGrid = document.getElementById('productGrid');

function renderProducts(list) {
  productGrid.innerHTML = '';
  list.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'item';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" loading="lazy"
           onerror="this.onerror=null;this.src='https://placehold.co/300x300?text=${encodeURIComponent(product.name)}';">
      <h3>${product.name}</h3>
      <p class="price">$${product.price} <span class="old-price">$${product.oldPrice}</span></p>
      <span class="rating">${product.rating} &#9733;</span>
      <button class="add-to-cart" data-index="${index}">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

renderProducts(products);

// ---------- Cart Logic ----------
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const toastEl = document.getElementById('toast');

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 1800);
}

productGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-to-cart');
  if (!btn) return;
  const index = Number(btn.dataset.index);
  const product = products[index];
  cartCount += 1;
  cartCountEl.textContent = cartCount;
  showToast(`Added "${product.name}" to cart`);
});

document.getElementById('cartBtn').addEventListener('click', () => {
  if (cartCount === 0) {
    showToast('Your cart is empty. Start shopping!');
  } else {
    showToast(`You have ${cartCount} item(s) in your cart`);
  }
});

document.getElementById('loginBtn').addEventListener('click', () => {
  showToast('Welcome! Please login to continue');
});

// ---------- Search Filter ----------
document.getElementById('searchBox').addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// ---------- Carousel Logic ----------
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const dotsContainer = document.getElementById('carouselDots');
const dots = Array.from(dotsContainer.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let autoSlideTimer = null;

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(Number(dot.dataset.index));
    stopAutoSlide();
    startAutoSlide();
  });
});

const carousel = document.getElementById('carousel');
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

goToSlide(0);
startAutoSlide();