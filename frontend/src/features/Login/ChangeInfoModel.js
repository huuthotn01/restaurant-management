async function getUserInfo(email) {
    let user_data = {
        "email": email
    };
    const response = await fetch('/get-user-info', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        },
        body: JSON.stringify(user_data)
    });
    if (response.status !== 200) console.log("Error occurred!");
    const body = await response.json();
    return body;
}

export { getUserInfo };