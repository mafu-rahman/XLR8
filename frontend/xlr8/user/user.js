document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  fetch(
    `http://localhost:8081/api/v1/user/find/${localStorage.getItem("em")}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error" + response.statusText);
      }
      return response.json();
    })
    .then((user) => {
      console.log(user);
      const userContainer = document.getElementById("userContainer");
      const userDiv = document.createElement("div");
      userDiv.classList.add("userInfo");
      userDiv.innerHTML = `
      <strong>Name:</strong> ${user.firstName} ${user.lastName}<br>
      <strong>Email:</strong> ${user.email}<br>
      <strong>Phone:</strong> ${user.phoneNumber}<br>
      <strong>Active:</strong> ${user.active ? "Yes" : "No"}<br><br>
    `;
      userContainer.appendChild(userDiv);
    })
    .catch((error) => {
      console.error("Error fetching user details", error);
    });
});