// Time-based greeting


const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

if (heroTitle && heroSubtitle) {

    const hour = new Date().getHours();

    let greeting = "";
    let message = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning! ☀️";
        message = "Start your day with a fresh chapter and a fresh mind.";
    }

    else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon! 🌤️";
        message = "Take a break and discover your next great read.";
    }

    else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening! 🌇";
        message = "Relax, unwind, and enjoy a wonderful book.";
    }

    else {
        greeting = "Good Night! 🌙";
        message = "End your day with a story worth remembering.";
    }

    heroTitle.textContent = greeting;
    heroSubtitle.textContent = message;
}






// Dynamic book card generator
function createBookCard(book) {
  return `
    <article class="book-card" data-id="${book.id}">
      <img src="${book.image}" alt="${book.title}" loading="lazy">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="rating">⭐ ${book.rating} (${book.reviews} reviews)</p>
      <p class="price">
        ₹${book.price}
        <small><s>₹${book.originalPrice}</s></small>
      </p>
      <button class="add-to-cart" data-id="${book.id}" ${!book.inStock ? "disabled" : ""}>
        ${book.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </article>
  `;
}

function renderBooks(bookList) {
  const container = document.getElementById("books-container");
  if (!container) return;
  container.innerHTML = bookList.map(book => createBookCard(book)).join("");
  attachAddToCartListeners();
}

function attachAddToCartListeners() {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
      const bookId = parseInt(this.getAttribute("data-id"));
      addToCart(bookId);
    });
  });
}

// Render books on the books.html page (if container exists)
if (document.getElementById("books-container")) {
  renderBooks(books);
}

// Attach listeners for any existing add-to-cart buttons (e.g., on homepage)
// document.addEventListener("DOMContentLoaded", () => {
//   attachAddToCartListeners();
// });

const toggleBtn = document.getElementById("theme-toggle");

if(toggleBtn){

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        const dark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );

        toggleBtn.textContent =
            dark ? "☀️" : "🌙";
    });
}