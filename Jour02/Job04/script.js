function myRegisterStudent(form) {
    const email = form.querySelector("#student-mail").value;
    const fullname = form.querySelector("#student-fullname").value;
    const gender = form.querySelector("#student-gender").value;
    const grade = form.querySelector("#student-grade").value;
    const birthdate = form.querySelector("#student-birthdate").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email format.");
        return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdate.match(dateRegex)) {
        alert("Invalid date format.");
        return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("fullname", fullname);
    formData.append("gender", gender);
    formData.append("grade", grade);
    formData.append("birthdate", birthdate);

    fetch("request.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            alert("Student registered successfully!");
            form.reset(); 
        } else {
            alert("Error registering student.");
        }
    })
    .catch(error => {
        console.error("Error in request: " + error);
    });
}

const form = document.getElementById("form-add-student");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    myRegisterStudent(form);
});
