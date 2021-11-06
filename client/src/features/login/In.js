import React from 'react';
import {Logout} from './Google';
import Image from 'react-bootstrap/Image';

class In extends React.Component {
    render() {
        return (
            <>
                <div className='submitButton socialNets'>
                    <Image src={this.props.avatar} roundedCircle />
                    <p1>Hello, {this.props.context.fName}</p1>
                    <Logout context={this.props.context} />
                </div>
            </>
        );
    }
}

export {In};