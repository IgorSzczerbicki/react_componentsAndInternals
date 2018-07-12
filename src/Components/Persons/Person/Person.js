import React, {Component} from 'react'
import classes from './Person.css'
import withClass2 from '../../../hoc/withClass2'
import Aaux from '../../../hoc/Aaux'

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
			<Aaux>
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
			</Aaux>
		);
	};
}

export default withClass2(Person, classes.Person);