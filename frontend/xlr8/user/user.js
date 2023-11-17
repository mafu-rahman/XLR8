document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:8080/api/v1/user/johndoe@gmai.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error" + response.statusText);
      }
      return response.json();
    })
    .then((user) => {
      const userContainer = document.getElementById("userContainer");
      const userDiv = document.createElement("div");
      userDiv.classList.add("userInfo");
      userDiv.innerHTML = `<strong>Name:</strong> ${user.firstName} 
      ${user.lastName}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Phone:</strong> ${user.phoneNumber}<br>
        <strong>Address: ${user.address.street}, ${user.address.city}, ${
        user.address.province
      }, ${user.address.country}, ${user.address.zipCode}</strong> <br>
                    <strong>Active:</strong> ${
                      user.activeState ? "Yes" : "No"
                    }<br><br><br>
                `;
      userContainer.appendChild(userDiv);
    })
    .catch((error) => {
      console.error("Error fetching user details", error);
    });
});
