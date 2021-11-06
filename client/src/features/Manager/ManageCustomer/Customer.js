class Customer {
    #firstname = ''; #lastname = ''; #username = ''; #password = ''; 
    #phone = ''; #email = ''; #is_authenticate = undefined; 

    constructor(firstname, lastname, username, password, phone, email, is_authenticate){
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#username = username;
        this.#password = password;
        this.#phone = phone;
        this.#email = email;
        this.#is_authenticate = is_authenticate;
    }

    get firstname() { return this.#firstname; }
    get lastname() { return this.#lastname; }
    get username() { return this.#username; }
    get phone() { return this.#phone; }
    get password() { return this.#password; }
    get email() { return this.#email; }
    get is_authenticate() { return this.#is_authenticate; }

    set is_authenticate(bool) { this.#is_authenticate = bool; }
}

export default Customer;