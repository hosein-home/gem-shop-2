document.addEventListener("DOMContentLoaded", (e)=>{
    document.body.classList.add("fade-in");
    if(document.querySelectorAll("#log-in, #sign-in, #a-tag")){
        document.querySelectorAll("#log-in, #sign-in, #a-tag").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const href = link.getAttribute("href");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 800);
            })
        })
    }

    if(document.querySelectorAll("#come-back")){
        document.querySelectorAll("#come-back").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const href = link.getAttribute("href");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 1000);
            })
        }) 
    }
    
})