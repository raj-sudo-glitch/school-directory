document.getElementById("userDataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    };

    localStorage.setItem("userData", JSON.stringify(user)); // Save data locally

    alert("User data saved successfully!");
});
