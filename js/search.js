(function() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sortSelect = document.getElementById("sort");

  if (!searchInput || !categoryFilter || !sortSelect) return;

  function applyFilters() {
    let filtered = [...books];
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
    }

    const selectedCategory = categoryFilter.value;
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    const sortBy = sortSelect.value;
    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    renderBooks(filtered);
    showResultCount(filtered.length);
  }

  function showResultCount(count) {
    let countDisplay = document.getElementById("result-count");
    if (!countDisplay) {
      countDisplay = document.createElement("p");
      countDisplay.id = "result-count";
      countDisplay.style.textAlign = "center";
      countDisplay.style.color = "#666";
      const grid = document.getElementById("books-container");
      grid.parentNode.insertBefore(countDisplay, grid);
    }
    countDisplay.textContent = `Showing ${count} book${count !== 1 ? 's' : ''}`;
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  applyFilters();
})();