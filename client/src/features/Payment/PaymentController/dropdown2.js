import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { LoginContext } from '../../SharedComponent/LoginContext';

export default class DropMenu extends React.Component {
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
        <Dropdown  isOpen={this.state.btnDropright}  toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
        <DropdownToggle caret>
        <a href='/ordering'> {this.context.lang === "vi" ? "Quay lại Menu" : "Go back to Menu"} </a>
        </DropdownToggle>
      </Dropdown>
    );
  }
}
DropMenu.contextType = LoginContext;