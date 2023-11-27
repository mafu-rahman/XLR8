document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cartContainer");
  const totalAmountDiv = document.getElementById("totalAmount");
  const checkoutButton = document.getElementById("checkoutButton");
  const cartId = localStorage.getItem("cartId");
  const token = localStorage.getItem("token");

  fetch(`http://localhost:8081/api/v1/cart/${cartId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((cart) => {
      const products = {};
      cart.items.forEach((item) => {
        fetch(
          `http://localhost:8081/api/v1/product/get-product-id?cartItemId=${item.cartItemId}`
        )
          .then((response) => response.json())
          .then((product) => {
            const key = product.productId || product.name;
            if (products[key]) {
              products[key].quantity += item.quantity;
            } else {
              products[key] = {
                ...product,
                quantity: item.quantity,
                cartItemId: item.cartItemId,
              };
            }
            updateCartDisplay();
          });
      });

      function updateCartDisplay() {
        cartContainer.innerHTML = "";
        Object.values(products).forEach((product) => {
          displayProduct(
            product,
            product.quantity,
            product.cartItemId,
            cart.cartId
          );
        });
      }

      totalAmountDiv.innerText = `Total: $${cart.order.totalAmount}`;
      checkoutButton.addEventListener("click", function () {
        alert("Order Placed");
      });
    })
    .catch((error) => console.error("Error fetching cart:", error));

  function displayProduct(product, quantity, cartItemId, cartId) {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const imageSrc = product.images[0] != undefined ? product.images[0] : "";
    productDiv.innerHTML = `
      <img class="productImage" src="${imageSrc}" alt="${product.name}" />
      <div class="productDetails">
          <div class="productName">${product.name}</div>
          <div class="productPrice">$${product.price}</div>
          <div>Quantity: ${quantity}</div>
          <button class="deleteBtn" data-cart-item-id="${cartItemId}" data-cart-id="${cartId}">Delete</button>
      </div>
    `;

    cartContainer.appendChild(productDiv);

    productDiv
      .querySelector(".deleteBtn")
      .addEventListener("click", function (event) {
        const cartItemId = event.target.getAttribute("data-cart-item-id");
        deleteCartItem(cartId, cartItemId);
      });
  }

  function deleteCartItem(cartId, cartItemId) {
    const url = `http://localhost:8081/api/v1/cart/deleteItem?cartUuid=${cartId}&itemUuid=${cartItemId}&quantity=1`;
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        window.location.reload();
      })
      .catch((error) => console.error("Error deleting item:", error));
  }
});
