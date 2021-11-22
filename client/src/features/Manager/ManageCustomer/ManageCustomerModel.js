import user_data from '../../../data/user.json';
import Customer from "./Customer";
import axios from 'axios';

// var user_data;
// async function get_data() {
//     var data = []
//     const response = await axios.get('/get_user');
//     const body = response.data.users;
//     console.log("Return body: ", body);
//     data = body;
//     return data;
// }    
// get_data()
// .then(res => {
//     console.log("Res: ", res);
//     user_data = res;
// });

class ManageCustomerModel {

    //------------------------------ATTRIBUTE------------------------------------
    #customers = [];  #option = undefined; #customers_not_auth = [];
    #isModalOpenAuth = undefined; #customerOpenAuth = undefined;
    #customers_display = []; #customerOpen = undefined; #isModalViewOpen = undefined;
    #isModalDeleteOpen = undefined; #customerDelete = undefined;

    //-------------------------------CONSTRUCTOR---------------------------------
    constructor() {
        (async () => {
            // console.log("Hihi: ", user_data);
            this.#customers = user_data.filter(customer => {
                return customer['role'] === "1";
            }).map(customer => {
                return new Customer(customer['fname'], customer['lname'], customer['username'], 
                                    customer['password'], customer['phone'], customer['email'], customer['Authenticate']);
            });

            this.#option = 0;
            this.#customers_not_auth = user_data.filter(customer => {
                return customer['role'] === "1" && customer['Authenticate'] === false;
            }).map(customer => {
                return new Customer(customer['fname'], customer['lname'], customer['username'], 
                                    customer['password'], customer['phone'], customer['email'], customer['Authenticate']);
            });;
            this.#isModalOpenAuth = false;
            this.#customerOpenAuth = new Customer('','','','','','','');

            this.#customers_display = user_data.filter(customer => {
                return customer['role'] === "1";
            }).map(customer => {
                return new Customer(customer['fname'], customer['lname'], customer['username'], 
                                    customer['password'], customer['phone'], customer['email'], customer['Authenticate']);
            });
            this.#customerOpen = new Customer('','','','','','','');
            this.#isModalViewOpen = false;
            this.#isModalDeleteOpen = false;
            this.#customerDelete = new Customer('','','','','','','');
        })();
    }

    //----------------------------------------GETTER--------------------------------------
    get customers() { return this.#customers; }
    get option() { return this.#option; }
    get customers_not_auth() { return this.#customers_not_auth; }
    get isModalOpenAuth() { return this.#isModalOpenAuth; }
    get customerOpenAuth() { return this.#customerOpenAuth; }
    get customers_display() { return this.#customers_display; }
    get customerOpen() { return this.#customerOpen; }
    get isModalViewOpen() { return this.#isModalViewOpen; }
    get isModalDeleteOpen() { return this.#isModalDeleteOpen; }
    get customerDelete() { return this.#customerDelete; }

    //-------------------------------------SETTER-----------------------------------------
    set option(options) { this.#option = options; }
    set customers_not_auth(list) { this.#customers_not_auth = list; }
    set isModalOpenAuth(bool) { this.#isModalOpenAuth = bool; }
    set customerOpenAuth(customer) { this.#customerOpenAuth = customer; }
    set customers_display(list) { this.#customers_display = list; }
    set customerOpen(customer) { this.#customerOpen = customer; }
    set isModalViewOpen(bool) { this.#isModalViewOpen = bool; }
    set isModalDeleteOpen(bool) { this.#isModalDeleteOpen = bool; }
    set customerDelete(customer) { this.#customerDelete = customer; }
    

    //-------------------------------------HELP_METHODS----------------------------------
    getCustomer(phone) {
        for (let i = 0; i < this.#customers_not_auth.length; i++)
            if (this.#customers_not_auth[i].phone.toString() === phone.toString())
                return this.#customers_not_auth[i];
    }

    getCustomerOpen(phone) {
        for (let i = 0; i < this.#customers.length; i++)
            if (this.#customers[i].phone.toString() === phone.toString())
                return this.#customers[i];
    }

    writeData(data) {
        axios.post('/update_user', data)
            .then().catch(error => console.log(error));
    }    

    //----------------------------------------MAIN_METHODS-----------------------------------------
    getCusnotAuth() {
        return this.#customers.filter(customer => {
            return customer.is_authenticate === false;
        })
    }

    authCustomer(customer_phone) {
        let data = []
        for (let i = 0; i < this.#customers.length; i++) { 
            if (this.#customers[i].phone.toString() === customer_phone.toString())
                this.#customers[i].is_authenticate = true;

                data = user_data.map(user => {
                    if (user.phone.toString() === customer_phone.toString()) 
                        user.Authenticate = true;
                    return user;
                })
        }
        this.writeData(data);
    }

    getCustomerbyName(customer_name) {
        console.log(customer_name);
        return this.#customers.filter(customer => { 
            return (customer.lastname + ' ' + customer.firstname).replace(/\s+/g, '').toLowerCase().includes(customer_name.replace(/\s+/g, '').toLowerCase());
        })
    }

    deleteCustomerbyPhone(customer_phone) {
        this.#customers = this.#customers.filter(customer => {
            return customer.phone.toString() !== customer_phone.toString();
        })
        this.#customers_display = this.#customers_display.filter(customer => {
            return customer.phone.toString() !== customer_phone.toString();
        })
        console.log(this.#customers)

        const data = user_data.filter(user => {
            return customer_phone.toString() !== user.phone.toString()
        })

        console.log(data)
        this.writeData(data)
    }
}

export default ManageCustomerModel;