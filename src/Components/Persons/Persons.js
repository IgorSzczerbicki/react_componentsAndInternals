import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent{

	constructor(props) {
		super(props);
		console.log('[Persons.js] Constructor', props);
		this.lastPersonRef = React.createRef();
	}

	componentWillMount(){
		console.log('[Persons.js] componentWillMount()')
	}

	componentDidMount(){
		console.log('[Persons.js] componentDidMount()');
		this.lastPersonRef.current.focus();
	}

	componentWillReceiveProps(nextProps){
		console.log('[UPDATE Persons.js] componentWillReceiveProps()', nextProps)
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('[UPDATE Persons.js] shouldComponentUpdate()', nextProps, nextState);
	// 	return nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.clicked !== this.props.clicked;
	// }

	componentWillUpdate(nextProps, nextState){
		console.log('[UPDATE Persons.js] componentWillUpdate()', nextProps, nextState)
	}

	componentDidUpdate(){
		console.log('[UPDATE Persons.js] componentDidUpdate()')
	}

	render() {
		console.log('[Persons.js] render()');
		return this.props.persons.map((person, index) => {
			return <Person
				key = {person.id}
				delete ={this.props.clicked.bind(this, index)}
				position = {index}
				name={person.name}
				age ={person.age}
				changeName = {(event) => this.props.changed(event, person.id)}
				ref = {this.lastPersonRef}
			/>
		});
	}
}

export default Persons;