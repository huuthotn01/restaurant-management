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
    }

    changeView(option) {
        const newModel = this.state.model;
        newModel.option = option;
        this.setState({model: newModel});
    }

    onToggleModalAuth(phone, flag) {
        console.log(phone);
        const newModel = this.state.model;
        if (flag == true) 
            newModel.customerOpenAuth = this.state.model.getCustomer(phone);
        console.log(newModel);
        newModel.isModalOpenAuth = !this.state.model.isModalOpenAuth;
        this.setState({model: newModel});
    }

    getNotAuthCustomerList() {
        const customerList = this.state.model.getCusnotAuth();
        const newModel = this.state.model;
        newModel.customers_not_auth = customerList;
        this.setState({model: newModel})
    }

    render() {
        return <ManageCustomerView model = {this.state.model} changeView = {this.changeView}
                                   getNotAuthCustomerList = {this.getNotAuthCustomerList} 
                                   onToggleModalAuth = {this.onToggleModalAuth} />
    }
}

export default ManageCustomerController;