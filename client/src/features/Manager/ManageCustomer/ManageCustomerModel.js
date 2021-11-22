import user_data from '../../../data/user.json';
import Customer from "./Customer";

class ManageCustomerModel {

    //------------------------------ATTRIBUTE------------------------------------
    #customers = [];  #option = undefined; #customers_not_auth = [];
    #isModalOpenAuth = undefined; #customerOpenAuth = undefined;
    

    //-------------------------------CONSTRUCTOR---------------------------------
    constructor() {
        this.#customers = user_data.filter(customer => {
            return customer['role'] === "1";
        }).map(customer => {
            return new Customer(customer['fname'], customer['lname'], customer['username'], 
                                customer['password'], customer['phone'], customer['email'], customer['authenticate']);
        });

        this.#option = 0;
        this.#customers_not_auth = [];
        this.#isModalOpenAuth = false;
        this.#customerOpenAuth = new Customer('','','','','','','');
    }

    //----------------------------------------GETTER--------------------------------------
    get customers() { return this.#customers; }
    get option() { return this.#option; }
    get customers_not_auth() { return this.#customers_not_auth; }
    get isModalOpenAuth() { return this.#isModalOpenAuth; }
    get customerOpenAuth() { return this.#customerOpenAuth; }
    

    //-------------------------------------SETTER-----------------------------------------
    set option(options) { this.#option = options; }
    set customers_not_auth(list) { this.#customers_not_auth = list; }
    set isModalOpenAuth(bool) { this.#isModalOpenAuth = bool; }
    set customerOpenAuth(customer) { this.#customerOpenAuth = customer; }
    

    //-------------------------------------HELP_METHODS----------------------------------
    getCustomer(phone) {
        console.log(this.#customers_not_auth)
        for (let i = 0; i < this.#customers_not_auth.length; i++)
            if (this.#customers_not_auth[i].phone.toString() === phone.toString())
                return this.#customers_not_auth[i];
    }
    

    //----------------------------------------MAIN_METHODS-----------------------------------------
    getCusnotAuth() {
        return this.#customers.filter(customer => {
            return customer.is_authenticate === false;
        })
    }

    authCustomer(customer_phone) {
        for (let i = 0; i < this.#customers.length; i++) {
            if (this.#customers[i].phone.toString() === customer_phone.toString())
                this.#customers[i].is_authenticate = true;
        }
    }

    getCustomerbyName(customer_name) {
        return this.#customers.filter(customer => {
            return (customer.lname + ' ' + customer.fname).includes(customer_name);
        })
    }

    deleteCustomerbyPhone(customer_phone) {
        this.#customers = this.#customers.filter(customer => {
            return customer.phone.toString() !== customer_phone.toString();
        })
    }
}

export default ManageCustomerModel;