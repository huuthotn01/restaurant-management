import React, { useState } from 'react';
import ManageOrderView from './ManageOrderView';
import ManageOrderModel from './ManageOrderModel';

const ManageOrderController = () => {   
    const [model, setModel] = useState(ManageOrderModel);

    const getOrders = (orderID) => {
        const orders = model.getOrdersbyID(orderID);
        setModel(prevModel => ({
            ...prevModel,
            orders_search: orders
        }))
    };

    const getOrder = (orderID) => {
        const order = model.getDetailbyOrderID(orderID);

    }

    const getOrderList = (startTime, endTime) => {
        const OrderList = model.getOrderbyTime(startTime, endTime);
    }

    const onToggleModal = () => {
        setModel(prevModel => ({
            ...prevModel,
            isModalOpen: !model.isModalOpen
        }))
    } 

    const onChangeOrderOpen = (orderID) => {
        const order = model.getOrderbyID(orderID);
        const details = model.getDetailbyOrderID(orderID);
        setModel(prevModel => ({
            ...prevModel,
            orderDetailsOpen: details,
            orderOpen: order
        }))
    }

    const onPageChange = (pageNumber) => {
        setModel(prevModel => ({
            ...prevModel,
            activePage: pageNumber
        }))
    }

    const changeView = (options) => {
        setModel(prevModel => ({
            ...prevModel,
            option: options
        })) 
    }
    
    return  <ManageOrderView model = {model} getOrders = {getOrders} 
    getOrder = {getOrder} getOrderList = {getOrderList}
    onToggleModal = {onToggleModal} onChangeOrderOpen = {onChangeOrderOpen}
    onPageChange = {onPageChange} changeView={changeView}/>

}

export default ManageOrderController;