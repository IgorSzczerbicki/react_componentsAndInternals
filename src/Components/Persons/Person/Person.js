import React, {Component} from 'react';
import classes from './Person.css';
import withClass2 from '../../../hoc/withClass2';
import Aaux from '../../../hoc/Aaux';
import PropTypes from 'prop-types';
import {AuthContext} from "../../../containers/App";

class Person extends Component {

	constructor(props) {
		super(props);
		console.log('[Person.js] Constructor', props);
		this.inputElement = React.createRef()
	}

	componentWillMount(){
		console.log('[Person.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[Person.js] componentDidMount()');
		if (this.props.position === 0) this.inputElement.current.focus();
	}

	focus() {
		this.inputElement.current.focus();
	}

	render() {
		console.log('[Person.js] render()');
		return (
			<Aaux>
				<AuthContext.Consumer>
					{auth => auth ? <p>I'm authenticated</p> : null}
				</AuthContext.Consumer>
				<p onClick={this.props.delete}>
					Imie: {this.props.name}, wiek: {this.props.age} - click!
				</p>
				<p>
					{this.props.children}
				</p>
				<input
					//ref = {(inp) => {this.inputElement = inp}}
					ref = {this.inputElement}
					type="text"
					onChange={this.props.changeName}
					value={this.props.name}/>
			</Aaux>
		);
	};
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass2(Person, classes.Person);