import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../PaymentView/payment.css'
import { LoginContext } from '../../SharedComponent/LoginContext';


export default class DropPayment extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.momoPayment = this.momoPayment.bind(this);
  }

  async momoPayment() {
    await fetch('/payment_momo', {
      method: 'POST'
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
        <Dropdown  isOpen={this.state.btnDropright}  toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
        <DropdownToggle caret>
        {this.context.lang === "vi" ? "Thanh toán" : "Payment"}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><span id="payment_momo" className="hihi" onClick={this.momoPayment}>{this.context.lang === "vi" ? "Ví điện tử Momo" : "Momo wallet"}</span><img className="imag" border-radius="50px" width="30px" height="30px" src='./assets/images/momo.jpg' alt=""></img></DropdownItem>
          <DropdownItem><a className="hihi" href="/paymentbankcard">{this.context.lang === "vi" ? "Thẻ ngân hàng" : "Bank card"}</a><img width="70px" height="50px" src='./assets/images/bankcard.png' alt=""></img></DropdownItem>
          <DropdownItem><a className="hihi" href="/paymentcash">{this.context.lang === "vi" ? "Tiền mặt" : "Cash"}</a>&ensp;<img  width="100px" height="50px" src='./assets/images/cash.png' alt=""></img></DropdownItem> 
        </DropdownMenu>
      </Dropdown>
    );
  }
}

DropPayment.contextType = LoginContext;