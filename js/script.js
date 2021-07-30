window.addEventListener("load", function () {

})


function showPassword(){
    var text = document.getElementById("password");
    if (text.type == "password") {
        text.type = "text";
        document.getElementById("showpass-button").style.display="none";
        document.getElementById("hidepass-button").style.display="inline";
    } else {
        text.type = "password";
        document.getElementById("showpass-button").style.display="block";
        document.getElementById("hidepass-button").style.display="none";
    }
}