window.addEventListener("load", function () {
    //document.getElementById("showpass-button").addEventListener("click", showPassword());
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
        // var icon = document.getElementById("hidepass-button");
        // icon.style.display="none";
        // icon.classList.toggle("input__hidepass-button");
        // icon.classList.toggle("input__showpass-button");
        // icon.style.display="flex";
    }
}