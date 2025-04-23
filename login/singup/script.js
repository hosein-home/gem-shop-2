let swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

document.getElementById("btnAccountCreator").addEventListener("click", (e) =>{
    e.preventDefault()
    const userName = document.getElementById("name").value;
    const password = document.getElementById("userPassword").value;
    const pText = document.getElementById("test-sign-in");

    if(!userName || !password){
        pText.innerText = "لطفا همه فیلد ها را به درستی پر کنید!";
        return;
    }

    const user = {
        userName,
        password,
    };

    // let reTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(true){
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "SingUpTest/Test.html"
    }
    // else{
    //     pText.innerText = "ایمیل نا معتبر است"
    //     return;
    // }

})