import React from 'react'

const withClass2 = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props}/>
		</div>
	)
};

/* lub klasa anonimowa

const withClass2 = (WrappedComponent, className) => {
	return class extends Component {
	return (
		<div className={className}>
			<WrappedComponent {...this.props}/>
		</div>
	)
};
 */

export default withClass2