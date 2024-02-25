const register=document.querySelector("#register_user");
const register_form=document.querySelector("#register_form");

register_form.addEventListener("submit", async function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
      name: name,
      email: email,
      password: password
    };
    console.log(JSON.stringify(formData));
    try{
        let response=await fetch("http://panel.mait.ac.in:8001/auth/register/",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        });

        let result=await response.json();
        alert(result.message);
        window.location.href = "login.html";
    }
    catch(err){
        console.log(err.message);
    }

});
