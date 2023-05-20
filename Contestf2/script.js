document.addEventListener("DOMContentLoaded", function() {
  const users = [
    {id: 1, name: "John", age: "18", profession: "developer"},
    {id: 2, name: "Jack", age: "20", profession: "developer"},
    {id: 3, name: "Karen", age: "19", profession: "admin"}
  ];

  const filterBtn = document.getElementById("filter-btn");
  const professionSelect = document.getElementById("profession");
  const usersContainer = document.getElementById("users");
  const addUserBtn = document.getElementById("add-user-btn");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const newProfessionSelect = document.getElementById("new-profession");

  filterBtn.addEventListener("click", function() {
    const selectedProfession = professionSelect.value;
    if (selectedProfession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }

    const filteredUsers = users.filter(function(user) {
      return user.profession === selectedProfession;
    });

    renderUsers(filteredUsers);
  });

  addUserBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const profession = newProfessionSelect.value;

    if (name === "" || age === "" || profession === "") {
      alert("Please enter all the fields before adding a user.");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession
    };

    users.push(newUser);
    renderUsers(users);
  });

  function renderUsers(userList) {
    usersContainer.innerHTML = "";

    if (userList.length === 0) {
      usersContainer.innerHTML = "<p>No users found.</p>";
      return;
    }

    userList.forEach(function(user) {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const userId = document.createElement("p");
      userId.innerText = "ID: " + user.id;
      userCard.appendChild(userId);

      const userName = document.createElement("p");
      userName.innerText = "Name: " + user.name;
      userCard.appendChild(userName);

      const userAge = document.createElement("p");
      userAge.innerText = "Age: " + user.age;
      userCard.appendChild(userAge);

      const userProfession = document.createElement("p");
      userProfession.innerText = "Profession: " + user.profession;
      userCard.appendChild(userProfession);

      usersContainer.appendChild(userCard);
    });
  }

  renderUsers(users);
});
