let cart = [];
const savedCart = localStorage.getItem('BookVerse-cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
}

// function addToCart(bookId) {
//   const book = books.find((b) => b.id === bookId);
//   if (!book) {
//     alert('Book not found!');
//     return;
//   }
//   if (!book.inStock) {
//     alert('Sorry, this book is out of stock!');
//     return;
//   }

//   const existingItem = cart.find((item) => item.id === bookId);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({
//       id: book.id,
//       title: book.title,
//       author: book.author,
//       price: book.price,
//       image: book.image,
//       quantity: 1,
//     });
//   }

//   saveCart();
//   updateCartCount();
//   showNotification(`Added "${book.title}" to cart! 📚`);
// }
function addToCart(bookId) {
  console.count('addToCart called');

  const book = books.find((b) => b.id === bookId);
  if (!book) {
    alert('Book not found!');
    return;
  }

  const existingItem = cart.find((item) => item.id === bookId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      quantity: 1,
    });
  }

  saveCart();
  updateCartCount();
}

function saveCart() {
  localStorage.setItem('BookVerse-cart', JSON.stringify(cart));
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = totalQty;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

updateCartCount();
