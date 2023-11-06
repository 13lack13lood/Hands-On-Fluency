let isAuth = false;

const createAccount = (
    firstName,
    lastName,
    email,
    password,
    selected_course
) => {
    let params = {
        email: email,
        first_name: firstName,
        password: password,
        last_name: lastName,
        selected_course: selected_course,
    };

    console.log(JSON.stringify(params));

    let request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:5000/register");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.setRequestHeader("Access-Control-Allow-Methods", "*");
    request.setRequestHeader("Access-Control-Allow-Headers", "*");

    request.send(JSON.stringify(params));
    request.onload = () => {
        if (request.status == 200) {
            console.log(request.status);
            setAuth();
        }
    };
};

const login = (email, password) => {
    let params = {
        email: email,
        password: password,
    };

    let request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:5000/login");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.setRequestHeader("Access-Control-Allow-Methods", "*");
    request.setRequestHeader("Access-Control-Allow-Headers", "*");
    request.send(JSON.stringify(params));
    request.onload = () => {
        if (request.status == 200) {
            setAuth(true);
        }
    };
};

const setAuth = () => {
    isAuth = true;
};

const isAuthenticated = () => {
    return isAuth;
};

export { createAccount, login, isAuthenticated };
