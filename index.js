const register=document.querySelector("#register_user");
const register_form=document.querySelector("#register_form");

register_form.addEventListener("submit", async function(e){
    e.preventDefault();
    let data=new FormData(register_form);
    console.log(Array.from(data));
    try{
        let response=await fetch("http://panel.mait.ac.in:8001/auth/register/",{
        method:"POST",
        body: new FormData(register_form)
        });

        let result=await response;
        alert(result.message);
        console.log(result);
    }
    catch(err){
        console.log(err.message);
    }

});