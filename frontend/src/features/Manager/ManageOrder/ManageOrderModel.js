import axios from 'axios';
import Order from './Order';
import OrderDetail from './OrderDetail';

async function getOrderDetails() {
    const response = await axios.get('/get_order_details');
    const body = response.data.details;
    console.log("Return body: ", body);
    return body;
}

async function getOrder() {
    const response = await axios.get('/get_order');
    const body = response.data.orders;
    console.log("Return body: ", body);
    return body;
}

class ManageOrderModel {

    //------------------------------ATTRIBUTE------------------------------------

    #order_details = []; #orders = []; #orders_search = [];
    #Data_Statistic = []; #isModalOpen = undefined;
    #orderDetailsOpen = []; #orderOpen = undefined; #activePage = undefined;
    #option = undefined;

    //-------------------------------CONSTRUCTOR---------------------------------

    constructor() {
    /*this.#order_details = order_details_data.map((order_detail) => {
        return new OrderDetail(order_detail['Order Number'],order_detail['Order Date'],
                                order_detail['Item Name'], order_detail['Quantity'],
                                order_detail['Product Price']);
        });
    this.#orders = orders_data.map((order) => {
        return new Order(order['Order Number'], order['Customer Name'], 
                        order['Order Date'], order['Total Products'], order['Total Price']);
        });
    this.#orders_search = orders_data.map((order) => {
        return new Order(order['Order Number'], order['Customer Name'], 
                        order['Order Date'], order['Total Products'], order['Total Price']);
        });
    this.#Data_Statistic = [];
    this.#isModalOpen = false;
    this.#orderDetailsOpen = [new OrderDetail('','','','','')];
    this.#orderOpen = new Order('','','','','');
    this.#activePage = 1;
    this.#option = 0;*/
    }

    async init() {
        let order_details_data = await getOrderDetails();
        let orders_data = await getOrder();

        this.#order_details = order_details_data.map((order_detail) => {
            return new OrderDetail(order_detail['Order Number'],order_detail['Order Date'],
                                    order_detail['Item Name'], order_detail['Quantity'],
                                    order_detail['Product Price']);
            });
        this.#orders = orders_data.map((order) => {
            return new Order(order['Order Number'], order['Customer Name'], 
                            order['Order Date'], order['Total Products'], order['Total Price']);
            });
        this.#orders_search = orders_data.map((order) => {
            return new Order(order['Order Number'], order['Customer Name'], 
                            order['Order Date'], order['Total Products'], order['Total Price']);
            });
        this.#Data_Statistic = [];
        this.#isModalOpen = false;
        this.#orderDetailsOpen = [new OrderDetail('','','','','')];
        this.#orderOpen = new Order('','','','','');
        this.#activePage = 1;
        this.#option = 0;
    }

    //----------------------------------------GETTER--------------------------------------

    get order_details() { return this.#order_details }; 
    get orders() { return this.#orders }; 
    get orders_search() { return this.#orders_search }; 
    get Data_Statistic() { return this.#Data_Statistic }; 
    get isModalOpen() { return this.#isModalOpen }; 
    get orderDetailsOpen() { return this.#orderDetailsOpen };  
    get orderOpen() { return this.#orderOpen };  
    get activePage() { return this.#activePage }; 
    get option() { return this.#option }; 

    //-------------------------------------SETTER-----------------------------------------

    set orders_search(orders_search) { this.#orders_search = orders_search; }
    set Data_Statistic(Data_Statistic) { this.#Data_Statistic = Data_Statistic; }
    set isModalOpen(isModalOpen) { this.#isModalOpen = isModalOpen; }
    set orderDetailsOpen(orderDetailsOpen) { this.#orderDetailsOpen = orderDetailsOpen; }
    set orderOpen(orderOpen) { this.#orderOpen = orderOpen; }
    set activePage(activePage) { this.#activePage = activePage; }
    set option(option) { this.#option = option; }

    //-------------------------------------HELP_METHODS----------------------------------

    changeDate(d) {
        let d1 = d.toString().split("-");
        let dd = d1[2];
        let mm = d1[1];
        let yy = d1[0];
        let hh = '00';
        let min = '00';
        let ss = '00';
        return new Date(yy, mm - 1, dd, hh, min, ss);
    };

    get_date(d) {
        let d1 = d.split(" ");
        let date = d1[0].split("/");
        let time = d1[1].split(":");
        let dd = date[0];
        let mm = date[1]; 
        let yy = date[2];
        let hh = time[0];
        let min = time[1];
        let ss = '00';
        
        let date2 = new Date(yy, mm - 1, dd, hh, min, ss);
        return (date2.getDate() + '/' + date2.getMonth() + '/'+date2.getFullYear())
    };

    increase_month(d) {
        let date = d.split("/");
        let dd = date[0];
        let mm = date[1];
        let yy = date[2];
        mm = (parseInt(mm) + 1).toString();
        return (dd + '/' + mm + '/' + yy);
    };

    //----------------------------------------MAIN_METHODS-----------------------------------------
    
    getOrdersbyID(orderID) {
        return this.#orders.filter((order) => {
            return order.orderID.toString().includes(orderID.toString());
        })
    };

    getOrderbyID(orderID) {
        for (let i = 0; i < this.#orders.length; i++)
            if (this.#orders[i].orderID.toString() === orderID.toString()) return this.#orders[i];
    };

    getDetailbyOrderID(orderID) {
        const details = this.#order_details.filter((detail) => {
            return detail.orderID.toString() === orderID.toString();
        })
        return details;
    };
    
    getOrderbyTime(startTime, endTime) {
        const STime = this.changeDate(startTime);
        const ETime = this.changeDate(endTime);
        const list = this.#orders.filter((order) => {
            const CTime = order.changeDate(order.orderDate);
            return (STime.getTime() <= CTime.getTime()) && (CTime.getTime() <= ETime.getTime());
        })

        let date = [];
        for (let i = 0; i < list.length; i++) {
            if (!date.includes(this.get_date(list[i].orderDate)))
                date.push(this.get_date(list[i].orderDate));
        };

        for (let i = 0; i < date.length; i++) {
            const orders = list.filter(order => {
                return this.get_date(order.orderDate) === date[i];
            })
            let total = 0;
            orders.map(order => {total += order.totalPrice; return order});
            
            total = Math.round(total * 23000 * 10000) / 10000 ;
            date[i] = {Day: this.increase_month(date[i]), Total: total}
        }

        return { data: date };
    }
}

export default ManageOrderModel;