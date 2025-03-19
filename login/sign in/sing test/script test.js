const check = localStorage.getItem("change text");

if(check == "true"){
    document.getElementById("h1-tag").innerText = "ورود شما با موفقیت انجام شد";
    localStorage.setItem("change text", "false")
}else{
    document.getElementById("h1-tag").innerText = " ثبت نام شما با موفقیت انجام شد "
}