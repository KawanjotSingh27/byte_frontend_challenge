const register_button=document.querySelector("#register");
const login_button=document.querySelector("#login");

register_button.addEventListener("click",()=>{
    window.location.href="/register_page/register.html"
})

login_button.addEventListener("click",()=>{
    window.location.href="/login_page/login.html"
})