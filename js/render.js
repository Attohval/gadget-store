const grid = document.getElementById("productGrid");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
  <div class="bg-white rounded shadow p-4">
    <a href="product.html?id=${p.id}">
      <img src="${p.images[0]}" class="h-40 w-full object-cover rounded">
      <h3 class="font-bold mt-2">${p.name}</h3>
    </a>

    <p class="text-green-600 font-semibold">
      ₦${p.price.toLocaleString()}
    </p>

    <span class="text-sm bg-gray-200 px-2 py-1 rounded">
      ${p.condition}
    </span>

    <a href="product.html?id=${p.id}"
      class="block mt-3 text-center bg-black text-white p-2 rounded">
      View Details
    </a>
  </div>
    `;
  });
}

shuffleArray(products);
renderProducts(products);
