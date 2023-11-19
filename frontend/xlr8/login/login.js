function submitForm() {
  var email = document.getElementById("email").value;

  localStorage.setItem("em", email);
  var password = document.getElementById("password").value;

  var loginData = {
    email: email,
    password: password,
  };

  var endpoint = "http://localhost:8081/api/v1/login";

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var target = document.querySelector("#response");
      target.innerHTML = data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log(data.cartId);
      }

      if (data.cartId) {
        localStorage.setItem("cartId", data.cartId);
        console.log(data.cartId);
      }

      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function signUpForm() {
  window.location.href = "../signup/signup.html";
}
