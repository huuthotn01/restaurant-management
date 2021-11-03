import order_details_data from '../../../data/order_details_2.json';
import orders_data from '../../../data/orders.json';

import Order from './Order';
import OrderDetail from './OrderDetail';

const ManageOrderModel = {
    order_details : order_details_data.map((order_detail) => {
        return new OrderDetail('',order_detail['Order Number'],order_detail['Order Date'],
                                order_detail['Item Name'], order_detail['Quantity'],
                                order_detail['Product Price']);
    }),
    orders : orders_data.map((order) => {
        return new Order(order['Index'],order['Order Number'], order['Customer Name'], 
                        order['Order Date'], order['Total Products'], order['Total Price']);
    }),

    orders_search : orders_data.map((order) => {
        return new Order(order['Index'],order['Order Number'], order['Customer Name'], 
                        order['Order Date'], order['Total Products'], order['Total Price']);
    }),

    orders_statistic : orders_data.map((order) => {
        return new Order(order['Index'],order['Order Number'], order['Customer Name'], 
                        order['Order Date'], order['Total Products'], order['Total Price']);
    }),

    Data_Statistic : [],

    isModalOpen: false,

    orderDetailsOpen: [new OrderDetail('','','','','','')],

    orderOpen: new Order('','','','','',''),

    activePage : 1,

    option: 0,

    changeDate: function(d) {
        let d1 = d.toString().split("-");
        let dd = d1[2];
        let mm = d1[1];
        let yy = d1[0];
        let hh = '00';
        let min = '00';
        let ss = '00';
        return new Date(yy, mm - 1, dd, hh, min, ss);
    },

    get_date: function(d) {
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
    },

    increase_month: function(d) {
        let date = d.split("/");
        let dd = date[0];
        let mm = date[1];
        let yy = date[2];
        mm = (parseInt(mm) + 1).toString();
        return (dd + '/' + mm + '/' + yy);
    },

    getOrdersbyID: function(orderID) {
        return this.orders.filter((order) => {
            return order.orderID.toString().includes(orderID.toString());
        })
    },

    getOrderbyID: function(orderID) {
        for (let i = 0; i < this.orders.length; i++)
            if (this.orders[i].orderID.toString() === orderID.toString()) return this.orders[i];
    },

    getDetailbyOrderID: function(orderID) {
        const details = this.order_details.filter((detail) => {
            return detail.orderID.toString() === orderID.toString();
        })
        for (let i = 0; i < details.length; i++)
            details[i].detailIdx = i + 1;
        return details;
    },
    
    getOrderbyTime: function(startTime, endTime) {
        const STime = this.changeDate(startTime);
        const ETime = this.changeDate(endTime);
        const list = this.orders.filter((order) => {
            const CTime = order.changeDate(order.orderDate);
            return (STime.getTime() <= CTime.getTime()) && (CTime.getTime() < ETime.getTime());
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


        return { list: list, data: date };
    }
}

export default ManageOrderModel;