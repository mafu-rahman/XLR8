function submitForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var zipCode = document.getElementById("zipCode").value;
    var country = document.getElementById("country").value;

    var phoneNumber = document.getElementById("phoneNumber").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    var signupData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: {
            street: street,
            city: city,
            province: province,
            zipCode: zipCode,
            country: country
        },
        phoneNumber: phoneNumber
    };

    var endpoint = 'http://localhost:8080/api/v1/signup';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        // Handle the successful response from the server
        // redirect to the homepage
        var target = document.querySelector("#response");//change the content of the HTML
	    target.innerHTML = data.status;

        console.log(data);
        // Redirect to a new page or perform other actions as needed


    })
    .catch(error => {
        // Handle errors, e.g., display an error message
        console.error('Error:', error);
    });
}
