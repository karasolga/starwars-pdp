import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

		state = {
				value: ''
		}

		render() {
				const {value} = this.state
				return (
						<input value={value} onChange={this.onChange}/>
				)
		}

		onChange = (evt) => {
				console.log('evt', evt)
				this.setState({
						value: evt.target.value
				})
		}
}

export default Input