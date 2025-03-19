document.getElementById("btn-log").addEventListener("click", (e) =>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pText = document.getElementById("test-log-in");

    if(!email || !password){
        pText.innerText = "!لطفا همه فیلد ها را به درستی پر کنید";
        return;
    }

    let userLocal = localStorage.getItem("user");
    const makeLocalObject =  JSON.parse(userLocal);
    if(email == makeLocalObject.email && password == makeLocalObject.password){
        localStorage.setItem("change text", "true");
        window.location.href = "sign in/sing test/sigh in test.html";
    }else{
        pText.innerText = "ایمیل یا رمز اشتباه است! لطفا دوباره تست کنید";
        return;
    }

})