import React from 'react'
import Person from './Person/Person'

const persons = (props) =>
	props.persons.map((person, index) => {
		return <Person
			key = {person.id}
			delete ={props.clicked.bind(this, index)}
			name={person.name}
			age ={person.age}
			changeName = {(event) => props.changed(event, person.id)} />
	});

export default persons;