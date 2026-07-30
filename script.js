const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        const container = document.getElementById("userContainer");

        users.forEach(user => {
            container.innerHTML += `
                <div class="user-card">
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                </div>
            `;
        });
    } 
    
    catch (error) {
        console.log(error);
    }
}

fetchUsers();