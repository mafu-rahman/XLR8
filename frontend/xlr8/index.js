document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");
  const sortAscBtn = document.getElementById("sortAsc");
  const sortDescBtn = document.getElementById("sortDesc");

  function fetchProducts(direction = "asc") {
    productContainer.innerHTML = "";
    fetch(`http://localhost:8081/api/v1/product/price?direction=${direction}`)
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
                <p><strong>Quantity:</strong> <input type="number" class="product-quantity" value="1" min="1"></p>
    <button class="addToCart" data-product-id="${product.productId}">Add to Cart</button>
              </div>
            `;
          productContainer.appendChild(productDiv);
          const addToCartButtons = productDiv.querySelectorAll(".addToCart");
          addToCartButtons.forEach((button) =>
            button.addEventListener("click", addToCart)
          );
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

function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute("data-product-id");

  const quantityInput = button
    .closest(".product")
    .querySelector(".product-quantity");
  const quantity = quantityInput.value;
  const cartId = sessionStorage.getItem("cartId");

  const addToCartUrl = `http://localhost:8081/api/v1/cart/addItem?cartId=${cartId}&productId=${productId}&quantity=${quantity}`;

  const token = sessionStorage.getItem("token");

  fetch(addToCartUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network error! status: ${response.status}`);
      } else {
        console.log("Added to cart");
      }
    })
    .catch((error) => {
      console.error("Error adding item, ", error);
    });
}
