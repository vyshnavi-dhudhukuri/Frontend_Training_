fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => {

        let users = data.users;
        let userList = document.getElementById("userList");

        users.forEach(user => {

            let li = document.createElement("li");
            li.classList.add("user-card");

            li.innerHTML = `
                <h3>${user.firstName} ${user.lastName}</h3>
                <p><strong>Age:</strong> ${user.age}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;
            userList.appendChild(li);
        });

    })
    .catch(error => console.log(error));
