async function ValidateLogin(username, password) {
    let user_data = {
        "username": username,
        "password": password
    };
    const response = await fetch('/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        },
        body: JSON.stringify(user_data)
    });
    if (response.status !== 200) throw Error("No proper response!");
    const body = await response.json();
    if (body.succ) return body.data;
    else return false;
}

async function ValidateSignUp(fullname, email, password) {
    let user_data = {
        "fullname": fullname,
        "email": email,
        "password": password
    };
    const response = await fetch('/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        },
        body: JSON.stringify(user_data)
    });
    if (response.status !== 200) throw Error("No proper response!");
    const body = await response.json();
    return body.succ;
}

export { ValidateLogin, ValidateSignUp }