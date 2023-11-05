const createAccount = (firstName, lastName, email, password, selected_course) => {
    let params = {
        email: email,
        first_name: firstName,
        password: password,
        last_name: lastName,
        selected_course: selected_course,
    };

    console.log(JSON.stringify(params));

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/register");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(params));
    request.onload = () => {
        if (request.status == 200) {
            console.log(request.response);
        }
    };
};

export { createAccount };
