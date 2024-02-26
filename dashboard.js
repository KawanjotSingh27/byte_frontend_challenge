const user_details=document.querySelector("#user_details");
const poem_display=document.querySelector("#poem_display");
const poem_form=document.querySelector("#poemForm");


async function get_details(){
  try{
    let response=await fetch("http://panel.mait.ac.in:8001/auth/user-details/",{
      method:"GET",
      headers: {
        Authorization:`Bearer ${localStorage.getItem("email")}`
      }
    });
    let result=await response.json();
    Object.entries(result).forEach(([key, value]) => {
      const h2=document.createElement("h2");
      h2.textContent=`${key} : ${value}`;
      user_details.appendChild(h2);
  })}
  catch(err){
    console.log(err.message);
  }
}

get_details();


async function get_poem(){
  try{
    let response=await fetch("http://panel.mait.ac.in:8001/poem/get/",{
      method:"GET",
      headers: {
        Authorization:`Bearer ${localStorage.getItem("email")}`
      }
    });
    let result=await response.json();
    result.forEach((poem) => {
      const div = document.createElement("div");
      const author = document.createElement("h2");
      const poemElement = document.createElement("p");

      author.textContent = poem.author;
      poemElement.textContent = poem.poem;

      div.appendChild(author);
      div.appendChild(poemElement);
      poem_display.appendChild(div);
    })
    if(!poem_display.hasChildNodes()){
      poem_display.style.display="none";
    }
  }
  catch(err){
    console.log(err.message);
  }
}

get_poem();

poem_form.addEventListener("submit", async function(e){
  e.preventDefault();
  let data=new FormData(poem_form);
  let jsonData = {};
  data.forEach((value, key) => {
    jsonData[key] = value;
  });
  try{
      let response=await fetch("http://panel.mait.ac.in:8001/poem/create/",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${localStorage.getItem("email")}`
      },
      body: JSON.stringify(jsonData)
      });

      let result=await response.json();

      if(result.message=="Poem created successfully"){
        window.location.href="dashboard.html"
      }
  }
  catch(err){
      console.log(err.message);
  }

});