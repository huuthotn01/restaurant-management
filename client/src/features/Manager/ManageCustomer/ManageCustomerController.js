import React, { Component } from "react";
import ManageCustomerModel from "./ManageCustomerModel";
import ManageCustomerView from "./ManageCustomerView";
import { LoginContext } from '../../SharedComponent/LoginContext';
import { Redirect, Switch } from "react-router";

class ManageCustomerController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ManageCustomerModel(),
            ok: false
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

    async componentDidMount() {
        console.log("State: ", this.state.model);
        let temp =  new ManageCustomerModel();
        console.log("Temp: ", temp);
        await temp.init();
        console.log("New temp: ", temp);
        this.setState({
            model: temp
        }, () => {
            console.log("Model: ", this.state.model);
            this.setState({ok: true});
        });
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
        return  <>
                {this.context.role !== "2" && <Switch> <Redirect to="/" /> </Switch>}
                <ManageCustomerView model = {this.state.model} changeView = {this.changeView}
                                   getNotAuthCustomerList = {this.getNotAuthCustomerList} 
                                   onToggleModalAuth = {this.onToggleModalAuth} 
                                   authCus = {this.authCus} getCustomerList = {this.getCustomerList} 
                                   onToggleViewModal = {this.onToggleViewModal} 
                                   onToggleDeleteModal = {this.onToggleDeleteModal}
                                   deleteCustomer = {this.deleteCustomer} />
                </>
    }
}

ManageCustomerController.contextType = LoginContext;

export default ManageCustomerController;