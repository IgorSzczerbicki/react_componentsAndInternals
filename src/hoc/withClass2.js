import React, {Component} from 'react'

const withClass2 = (WrappedComponent, className) => {
	const WithClass = class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
				</div>
			)
		}
	};
	return React.forwardRef((props, ref) => {
		return <WithClass {...props} forwardedRef ={ref} />
	});
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