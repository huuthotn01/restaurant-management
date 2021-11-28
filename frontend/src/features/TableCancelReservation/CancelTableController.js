import { Component } from 'react';

import CancelTableModel from './CancelTableModel';
class CancelTableController extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            model: new CancelTableModel()
        }
    }
}
export default CancelTableController