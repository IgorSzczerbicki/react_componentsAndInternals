import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
	render() {
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