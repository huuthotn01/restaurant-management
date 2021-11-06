import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Home extends Component {
    render(){
        return(   
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

export default Home;