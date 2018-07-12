import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{

	constructor(props) {
		super(props);
		console.log('[Persons.js] Constructor', props)
	}

	componentWillMount(){
		console.log('[Persons.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[Persons.js] componentDidMount()')
	}

	render() {
		console.log('[Persons.js] render()');
		return this.props.persons.map((person, index) => {
			return <Person
				key = {person.id}
				delete ={this.props.clicked.bind(this, index)}
				name={person.name}
				age ={person.age}
				changeName = {(event) => this.props.changed(event, person.id)} />
		});
	}
}

export default Persons;