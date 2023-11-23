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

    var endpoint = 'http://localhost:8081/api/v1/signup';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    .then(data => {
        
        var target = document.querySelector("#response");
	    target.innerHTML = data.status;

    })
    .catch(error => {
        console.error('Error:', error);
    });
}
