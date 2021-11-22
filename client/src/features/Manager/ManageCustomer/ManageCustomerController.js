import React, { Component } from "react";
import ManageCustomerModel from "./ManageCustomerModel";
import ManageCustomerView from "./ManageCustomerView";

class ManageCustomerController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ManageCustomerModel()
        }
        this.changeView = this.changeView.bind(this);
        this.getNotAuthCustomerList = this.getNotAuthCustomerList.bind(this);
        this.onToggleModalAuth = this.onToggleModalAuth.bind(this);
        this.authCus = this.authCus.bind(this);
        this.getCustomerList = this.getCustomerList.bind(this);
        this.onToggleViewModal = this.onToggleViewModal.bind(this);
        this.onToggleDeleteModal = this.onToggleDeleteModal.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    changeView(option) {
        const newModel = this.state.model;
        newModel.option = option;
        this.setState({model: newModel});
    }

    onToggleModalAuth(phone, flag) {
        const newModel = this.state.model;
        if (flag === true) 
            newModel.customerOpenAuth = this.state.model.getCustomer(phone);

        newModel.isModalOpenAuth = !this.state.model.isModalOpenAuth;
        this.setState({model: newModel});
    }

    getNotAuthCustomerList() {
        const customerList = this.state.model.getCusnotAuth();
        const newModel = this.state.model;
        newModel.customers_not_auth = customerList;
        this.setState({model: newModel})
    }
    
    authCus(phone) {
        const newModel = this.state.model;
        newModel.authCustomer(phone);
        newModel.customers_not_auth = newModel.getCusnotAuth();
        newModel.customers_display = newModel.customers;
        this.setState({model: newModel})
    }

    getCustomerList(name) {
        const newModel = this.state.model;
        newModel.customers_display = newModel.getCustomerbyName(name);
        this.setState({model: newModel})
    }

    onToggleViewModal(phone, flag) {
        const newModel = this.state.model;
        if (flag === true) newModel.customerOpen = newModel.getCustomerOpen(phone);
        newModel.isModalViewOpen = !this.state.model.isModalViewOpen;
        this.setState({model: newModel});
    }

    onToggleDeleteModal(phone, flag) {
        const newModel = this.state.model;
        if (flag === true) newModel.customerDelete = newModel.getCustomerOpen(phone);
        console.log(newModel.customerDelete);
        newModel.isModalDeleteOpen = !this.state.model.isModalDeleteOpen;
        this.setState({model: newModel});
    }

    deleteCustomer() {
        const newModel = this.state.model;
        newModel.deleteCustomerbyPhone(newModel.customerDelete.phone);
        this.setState({model: newModel}); 
    }

    render() {
        return <ManageCustomerView model = {this.state.model} changeView = {this.changeView}
                                   getNotAuthCustomerList = {this.getNotAuthCustomerList} 
                                   onToggleModalAuth = {this.onToggleModalAuth} 
                                   authCus = {this.authCus} getCustomerList = {this.getCustomerList} 
                                   onToggleViewModal = {this.onToggleViewModal} 
                                   onToggleDeleteModal = {this.onToggleDeleteModal}
                                   deleteCustomer = {this.deleteCustomer} />
    }
}

export default ManageCustomerController;