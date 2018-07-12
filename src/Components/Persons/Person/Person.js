import React, {Component} from 'react';
import classes from './Person.css';
import withClass2 from '../../../hoc/withClass2';
import Aaux from '../../../hoc/Aaux';
import PropTypes from 'prop-types';

class Person extends Component {

	constructor(props) {
		super(props);
		console.log('[Person.js] Constructor', props)
	}

	componentWillMount(){
		console.log('[Person.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[Person.js] componentDidMount()');
		if (this.props.position === 0) this.inputElement.focus();
	}

	render() {
		console.log('[Person.js] render()');
		return (
			<Aaux>
				<p onClick={this.props.delete}>
					Imie: {this.props.name}, wiek: {this.props.age} - click!
				</p>
				<p>
					{this.props.children}
				</p>
				<input
					ref = {(inp) => {this.inputElement = inp}}
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