window.addEventListener("load", function () {
    document.getElementById("login__button").addEventListener("click", loginValidation);
})

function showPassword(){
    var text = document.getElementById("password");
    if (text.type == "password") {
        text.type = "text";
        document.getElementById("showpass-button").classList.add("hidden");
        document.getElementById("hidepass-button").classList.remove("hidden");
    } else {
        text.type = "password";
        document.getElementById("showpass-button").classList.remove("hidden");
        document.getElementById("hidepass-button").classList.add("hidden");
    }
}

function closeSnackbar() {
    document.querySelector(".snackbar").classList.add("hidden");
    document.querySelector(".snackbar").classList.remove("snackbar__show");
}

function setError() {
    document.querySelectorAll(".input__container, .input__icon-box, .input__username-input, .input__password-input, .input__icon-box svg path")
    .forEach((element) => element.classList.add("error"));
}

function resetError() {
    document.querySelectorAll(".input__container, .input__icon-box, .input__username-input, .input__password-input, .input__icon-box svg path")
    .forEach((element) => element.classList.remove("error"));
    document.getElementById("error-user").classList.add("hidden");
    document.getElementById("error-password").classList.add("hidden");
}

function loginValidation(evt) {

    evt.preventDefault();

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    resetError();
    if(password.length < 5) {
        setError();
        document.getElementById("error-password").classList.remove("hidden");
    }
    else if(!validFormatEmail(email)) {
        setError();
        document.getElementById("error-user").classList.remove("hidden");
    }
    else {
        login(email, password);
    }
}

function validFormatEmail(email) {
    if (email.length === 0) {
        return false;
    }
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const login = async function(email,password) {
    try {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                email:`${email}`,
                password: `${password}`,
            }),
        });
        let responseJson = await response.json();
        if (response.status === 200) {
            document.cookie = "authToken=" + responseJson.accessToken;
            document.querySelector(".snackbar").classList.remove("error");
            document.querySelector(".snackbar").classList.remove("hidden");
            document.querySelector(".snackbar").classList.add("snackbar__show");
            document.querySelector(".snackbar").classList.add("success");
            document.getElementById("snackbar-text").innerHTML = "Success!";
            window.location.href = "main.html";
        }
        if(response.status === 400) {
            setError();
            document.querySelector(".snackbar").classList.remove("success");
            document.querySelector(".snackbar").classList.remove("hidden");
            document.querySelector(".snackbar").classList.add("snackbar__show");
            document.querySelector(".snackbar").classList.add("error");
            document.getElementById("snackbar-text").innerHTML = "Invalid credentials.";
        }
    }
    catch {
        document.querySelector(".snackbar").classList.remove("success");
        document.querySelector(".snackbar").classList.remove("hidden");
        document.querySelector(".snackbar").classList.add("snackbar__show");
        document.querySelector(".snackbar").classList.add("error");
        document.getElementById("snackbar-text").innerHTML = "Error, please try again.";
    }
}
