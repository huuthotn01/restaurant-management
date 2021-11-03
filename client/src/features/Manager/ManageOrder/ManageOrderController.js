import React, { useState } from 'react';
import ManageOrderView from './ManageOrderView';
import ManageOrderModel from './ManageOrderModel';

const ManageOrderController = () => {   
    const [model, setModel] = useState(ManageOrderModel);

    const getOrders = (orderID) => {
        const orders = model.getOrdersbyID(orderID);
        const newModel = {
            ...model,
            orders_search: orders
        }
        setModel(newModel);
    };

    const getOrderList = (startTime, endTime) => {
        const value = model.getOrderbyTime(startTime, endTime);
        const newModel = {
            ...model,
            orders_statistic: value.list,
            Data_Statistic: value.data
        }
        setModel(newModel);
    }

    const onToggleModal = (orderID, flag) => {
        if (flag === true) {
            const order = model.getOrderbyID(orderID);
            const details = model.getDetailbyOrderID(orderID);
            const newModel = {
                ...model,
                isModalOpen: !model.isModalOpen,
                orderDetailsOpen: details,
                orderOpen: order
            }
            setModel(newModel);
        } else {
            const newModel = {
                ...model,
                isModalOpen: !model.isModalOpen
            }
            setModel(newModel);
        }
    } 

    const onPageChange = (pageNumber) => {
        const newModel = {
            ...model,
            activePage: pageNumber
        }
        setModel(newModel);
    }

    const changeView = (options) => {
        const newModel = {
            ...model,
            option: options
        }
        setModel(newModel); 
    }
    
    return  <ManageOrderView model = {model} getOrders = {getOrders} 
    getOrderList = {getOrderList} onToggleModal = {onToggleModal} 
    onPageChange = {onPageChange} changeView={changeView}/>

}

export default ManageOrderController;