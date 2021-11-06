import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {Motion, spring} from 'react-motion';
import NavigationPanel from './NavigationPanel.js';
import Modal from './Modal.js';

class LoginWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		const {mounted} = this.state;

		let child;
		// let test = 12;

		if (mounted) {
			child = (
				<div className="LoginWindow">
					<NavigationPanel onClick={this.props.onClick}></NavigationPanel>
					<Modal />
				</div>
			);
		}
		
		return (
			<div className="Transitioning">
				<TransitionGroup>
					<CSSTransition
						unmountOnExit
						mountOnEnter
						timeout={500}
						classNames="example"
					>
						<div key={1}>
							{child}
						</div>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export {LoginWindow};
