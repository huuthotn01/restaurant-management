import React, { Component } from 'react';
import ManageOrderView from './ManageOrderView';
import ManageOrderModel from './ManageOrderModel';

class ManageOrderController extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            model: new ManageOrderModel()
        }
        this.getOrders = this.getOrders.bind(this);
        this.getOrderList = this.getOrderList.bind(this);
        this.onToggleModal = this.onToggleModal.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.changeView = this.changeView.bind(this);
    }  

    getOrders(orderID) {
        const newModel = this.state.model;
        
        newModel.orders_search = this.state.model.getOrdersbyID(orderID);

        this.setState({model: newModel});
    };

    getOrderList(startTime, endTime) {
        const newModel = this.state.model;
        const value = this.state.model.getOrderbyTime(startTime, endTime);

        newModel.orders_statistic = value.list;
        newModel.Data_Statistic = value.data;

        this.setState({model: newModel});
    }

    onToggleModal(orderID, flag) {
        const newModel = this.state.model;
        if (flag === true) {
            newModel.isModalOpen = !this.state.model.isModalOpen;
            newModel.orderOpen = this.state.model.getOrderbyID(orderID);
            newModel.orderDetailsOpen = this.state.model.getDetailbyOrderID(orderID);

            this.setState({model: newModel});
        } else {
            newModel.isModalOpen = !this.state.model.isModalOpen;

            this.setState({model: newModel});
        }
    } 

    onPageChange(pageNumber) {
        const newModel = this.state.model;

        newModel.activePage = pageNumber;

        this.setState({model: newModel});
    }

    changeView(options) {
        const newModel = this.state.model;

        newModel.option = options;

        this.setState({model: newModel});
    }
    
    render() {
        return  <ManageOrderView model = {this.state.model} getOrders = {this.getOrders} 
        getOrderList = {this.getOrderList} onToggleModal = {this.onToggleModal} 
        onPageChange = {this.onPageChange} changeView={this.changeView}/>
    }
}

export default ManageOrderController;