const cart = document.getElementById(".add-cart");
const slide = document.querySelectorAll(".swiper-slide");
const bg = document.getElementById("overlay");

slide.forEach(item => {
    item.addEventListener("click", () => {
        cart.style.display = "block";
        bg.style.display = "block";
       

    })
})

let nightBtn = document.getElementById("night");
let body = document.body;

nightBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("dark", true);
    } else{
        localStorage.setItem("dark", false);
    }

})
if(localStorage.getItem("dark") === "true"){
    body.classList.add("dark");
} 
let swiper = new Swiper('.swiper-container', {
    loop : true,
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
});


