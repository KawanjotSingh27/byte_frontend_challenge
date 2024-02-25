console.log(localStorage.getItem("email"));
const user_details=document.querySelector("#user_details");
// Add async function


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


//  fetch('http://panel.mait.ac.in:8001/auth/user-details/', {
//       method: 'GET',
//       headers: {
//         'Authorization': `${localStorage.getItem(data.email)}`
//       }
//     })
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
// .then(userDetails => {
//     console.log('User details:', userDetails);
//   })
// .catch(error => {
//     console.error('Error during registration or fetching user details:', error);
// });

// async function submitPoem(event){
//     event.preventDefault(); // Prevent the default form submission behavior

//     const poem = document.getElementById('poem').value;
//     const author = document.getElementById('author').value;

//     try {
//       const response = await fetch('http://panel.mait.ac.in:8001/poem/create/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           poem: poem,
//           author: author
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Poem created successfully:', data);
//     }
//     catch (error) {
//         console.error('Error creating poem:', error);
//     }
// }
