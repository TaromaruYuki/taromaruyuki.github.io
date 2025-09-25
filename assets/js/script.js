const theme = document.querySelector("#theme");

if(theme) {
    if(localStorage.p == "dark") {
        theme.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
    } else {
        theme.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
    }
    
    theme.addEventListener("click", e => {
        if(localStorage.p == "dark") {
            localStorage.p = "light";
            theme.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        } else {
            localStorage.p = "dark";
            theme.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        }
        
        H();
    });
}

const goBack = () => {
    if(history.length <= 1) {
        location.href = "/";
    } else {
        history.back();
    }
}