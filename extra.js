async function submitRegistration(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
      name: name,
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://panel.mait.ac.in:8001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Optionally, you can redirect the user to a success page or perform other actions

    } catch (error) {
      console.error('Error during registration:', error);
      // Handle errors as needed, e.g., display an error message to the user
    }
  }
