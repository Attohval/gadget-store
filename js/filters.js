const search = document.getElementById("search");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const condition = document.getElementById("condition");
const tabs = document.querySelectorAll(".tab-btn");

let selectedCategory = "";

// FILTER FUNCTION
function applyFilters() {
  let filtered = products.filter(p => {
    return (
      p.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (!minPrice.value || p.price >= minPrice.value) &&
      (!maxPrice.value || p.price <= maxPrice.value) &&
      (!condition.value || p.condition === condition.value) &&
      (!selectedCategory || p.category === selectedCategory)
    );
  });

  renderProducts(filtered);
}

// INPUT LISTENERS
[search, minPrice, maxPrice, condition].forEach(el =>
  el.addEventListener("input", applyFilters)
);

// CATEGORY TABS
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    selectedCategory = tab.dataset.category;

    tabs.forEach(t => {
      t.classList.remove("bg-black", "text-white");
      t.classList.add("bg-gray-200");
    });

    tab.classList.remove("bg-gray-200");
    tab.classList.add("bg-black", "text-white");

    applyFilters();
  });
});
