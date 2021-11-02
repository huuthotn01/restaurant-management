import React, { Component } from 'react';
import ManageOrderView from './ManageOrderView';
import ManageOrderModel from './ManageOrderModel';

class ManageOrderController extends Component {   
    handleSubmitSearch(order_number) {
        const search = ManageOrderModel.orders.filter(order => {
            return order['Order Number'] == order_number;
        });
        if (order_number === '') ManageOrderModel.orders_search = ManageOrderModel.orders; 
        else ManageOrderModel.orders_search = search;
        console.log(ManageOrderModel.orders_search);
    }

    render() {
        return <ManageOrderView model = {ManageOrderModel}
                                onSubmitSearch = {this.handleSubmitSearch} />
    }
}

export default ManageOrderController;