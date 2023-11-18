function submitForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var loginData = {
        email: email,
        password: password
    };

    var endpoint = 'http://localhost:8080/api/v1/login';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
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

function signUpForm(){
    window.location.href = '../signup/signup.html'
}