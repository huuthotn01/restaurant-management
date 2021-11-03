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

    isModalOpen: false,

    orderDetailsOpen: [new OrderDetail('','','','','','')],

    orderOpen: new Order('','','','','',''),

    activePage : 1,

    option: -1,

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
        return this.orders.filter((order) => {
            const STime = order.changeDate(startTime);
            const ETime = order.changeDate(endTime);
            const CTime = order.changeDate(order.orderDate);
            return (STime.getTime() <= CTime.getTime()) && (CTime.getTime() < ETime.getTime());
        })
    }
}

export default ManageOrderModel;