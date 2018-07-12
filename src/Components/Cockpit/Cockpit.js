import React from 'react'
import classes from './Cockpit.css'
import Aaux from '../../hoc/Aaux'
const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = classes.Button;

	if (props.showPersons) btnClass = [classes.Button, classes.Red].join(' ');

	if (props.persons.length <= 2){
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1){
		assignedClasses.push(classes.bold);
	}
	return (
		<Aaux>
			<h1>{props.appTitle}</h1>
			<p className={assignedClasses.join(' ')}>Dynamiczne style</p>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle persons
			</button>
		</Aaux>
	)
};

export default cockpit;