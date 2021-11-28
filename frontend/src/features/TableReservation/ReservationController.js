import { Component } from 'react';
import TableReservationModel from './ReservationModel';

class TableReservationController extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            model: new TableReservationModel()
        }
    }
}
export default TableReservationController;