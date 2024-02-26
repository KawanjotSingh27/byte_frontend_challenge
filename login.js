const login_form=document.querySelector("#login_form");


login_form.addEventListener("submit", async function(e){
    e.preventDefault();
    let data=new FormData(login_form);
    const email=document.querySelector("#email").value;
    try{
        let response=await fetch("http://panel.mait.ac.in:8001/auth/login/",{
        method:"POST",
        body: data
        });

        let result=await response.json();

        console.log(email);

        localStorage.setItem("email",result.access);
        if(Object.keys(result).length==2){
            window.location.href="dashboard.html";
        }
        else{
            alert("User does not exist");
        }
    }
    catch(err){
        console.log(err.message);
    }

});