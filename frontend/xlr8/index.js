document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");
  const sortAscBtn = document.getElementById("sortAsc");
  const sortDescBtn = document.getElementById("sortDesc");

  function fetchProducts(direction = "asc") {
    productContainer.innerHTML = "";
    fetch(`http://localhost:8080/api/v1/product/price?direction=${direction}`)
      .then((response) => response.json())
      .then((products) => {
        products.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className = "product";
          productDiv.innerHTML = `
              <img class="carImage" src="resources/ModelX.png" alt="${product.name}" />
              <div class="productDetails">
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Vehicle Type:</strong> ${product.vehicleType}</p>
                <p><strong>Model Year:</strong> ${product.modelYear}</p>
                <p><strong>Stock:</strong> ${product.stock}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>History:</strong> ${product.history}</p>
                <button class="addToCart">Add to Cart</button>
              </div>
            `;
          productContainer.appendChild(productDiv);
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  sortAscBtn.addEventListener("click", () => fetchProducts("asc"));
  sortDescBtn.addEventListener("click", () => fetchProducts("desc"));
  fetchProducts();
});
