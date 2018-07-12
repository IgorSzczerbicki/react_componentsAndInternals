import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'

class App extends PureComponent {

	constructor(props) {
		super(props);
		console.log('[App.js] Constructor', props)
	}

	componentWillMount(){
		console.log('[App.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[App.js] componentDidMount()')
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('[UPDATE App.js] shouldComponentUpdate()', nextProps, nextState);
	// 	return nextState.persons !== this.state.persons ||
	// 		nextState.showPersons !== this.state.showPersons;
	// }

	componentWillUpdate(nextProps, nextState){
		console.log('[UPDATE App.js] componentWillUpdate()', nextProps, nextState)
	}

	componentDidUpdate(){
		console.log('[UPDATE App.js] componentDidUpdate()')
	}

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
		console.log('[App.js] render()');
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
			<WithClass classes = {classes.App}>
					<button onClick = {() => this.setState({showPersons: true})}>Show Persons</button>
					<Cockpit
						showPersons = {this.state.showPersons}
						persons = {this.state.persons}
						clicked = {this.togglePersonHandler}
						appTitle = {this.props.title}
					/>
					{persons}
			</WithClass>
		);
	}
}

export default App;