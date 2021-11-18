import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
        <Dropdown direction="right" isOpen={this.state.btnDropright}  toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
        <DropdownToggle caret>
          Thanh toán
        </DropdownToggle>
        <DropdownMenu className="huhu">
          <DropdownItem><a className="hihi" href="/paymentMomo">Ví điện tử Momo (Momo wallet) </a><img className="imag" border-radius="50px" width="30px" height="30px" src='./assets/images/momo.jpg' alt=""></img></DropdownItem>
          <DropdownItem><a className="hihi" href="#">Thẻ ngân hàng (Bank card)</a><img width="70px" height="50px" src='./assets/images/bankcard.png' alt=""></img></DropdownItem>
          <DropdownItem><a className="hihi" href="#">Tiền mặt</a>&ensp;<img  width="100px" height="50px" src='./assets/images/cash.png' alt=""></img></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}