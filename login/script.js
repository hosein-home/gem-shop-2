let swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

document.getElementById("btnAccountCreator").addEventListener("click", (e) =>{
    e.preventDefault()
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const pText = document.getElementById("test-log-in");

    if(!email || !password){
        pText.innerText = "!لطفا همه فیلد ها را به درستی پر کنید";
        return;
    }

    let userLocal = localStorage.getItem("user");
    const makeLocalObject =  JSON.parse(userLocal);
    if(email == makeLocalObject.email && password == makeLocalObject.password){
        localStorage.setItem("change text", "true");
        window.location.href = "singup/SingUpTest/Test.html";
    }else{
        pText.innerText = "ایمیل یا رمز اشتباه است! لطفا دوباره تست کنید";
        return;
    }

})