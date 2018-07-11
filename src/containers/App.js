import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

	state = {
		persons: [
			{id: 0, name: 'Igor', age: 30},
			{id: 1, name: 'Anna', age: 25},
			{id: 2, name: 'Marcin', age: 33}
		],
		curPerson: 0,
		showPersons: false
	};

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons})
	};

	nameChangeHandler = (event, id) => {
		const personId = this.state.persons.findIndex(person => {
			return person.id === id;
		});

		const person = {
			...this.state.persons[personId]
		};
		//const person = Object.assign({}, this.state.persons[personId]

		const persons = [...this.state.persons];
		persons[personId] = person;

		person.name = event.target.value;
		this.setState({persons});
	};

	togglePersonHandler = () => {
		this.setState({showPersons: !this.state.showPersons})
	};

	render() {
		let persons = null;

		if (this.state.showPersons){
			persons = (
					<Persons
						persons = {this.state.persons}
						clicked = {this.deletePersonHandler}
						changed = {this.nameChangeHandler}
					/>
			);
		}

		return (
				<div className={classes.App}>
					<Cockpit
						showPersons = {this.state.showPersons}
						persons = {this.state.persons}
						clicked = {this.togglePersonHandler}
						appTitle = {this.props.title}
					/>
					{persons}
				</div>
		);
	}
}

export default App;