let night = document.getElementById("night");
let body = document.body;
night.addEventListener("click", function() {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark", "true");
    }
    else{
        localStorage.setItem("dark", "false");
    }
    
})

window.onload = function() {
    if (localStorage.getItem("dark") === "true") {
        body.classList.add("dark");
}}
