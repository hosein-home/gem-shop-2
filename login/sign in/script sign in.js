document.getElementById("btn-sign-in").addEventListener("click", (e) =>{
    e.preventDefault()
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pText = document.getElementById("test-sign-in");

    if(!userName || !email || !password){
        pText.innerText = "!لطفا همه فیلد ها را به درستی پر کنید";
        return;
    }

    const user = {
        userName,
        email,
        password,
    };

    let reTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(reTest.test(email)){
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "sing test/sigh in test.html"
    }else{
        pText.innerText = "ایمیل نا معتبر است"
        return;
    }

})