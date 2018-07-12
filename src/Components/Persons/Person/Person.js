import React, {Component} from 'react'
import classes from './Person.css'

class Person extends Component {

	constructor(props) {
		super(props);
		console.log('[Person.js] Constructor', props)
	}

	componentWillMount(){
		console.log('[Person.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[Person.js] componentDidMount()')
	}

	render() {
		console.log('[Person.js] render()');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.delete}>
					Imie: {this.props.name}, wiek: {this.props.age} - click!
				</p>
				<p>
					{this.props.children}
				</p>
				<input
					type="text"
					onChange={this.props.changeName}
					value={this.props.name}/>
			</div>
		);
	};
}

export default Person;