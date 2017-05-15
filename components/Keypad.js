const React = require('react');

class Keypad extends React.Component {
	constructor(props) {
		super(props);
		
		this.enteringPassword = this.enteringPassword.bind(this)
	}	

	enteringPassword() {
		console.log("Entering password...")
	}

	render() {
		return(
			<input type="password" onKeyUp={this.enteringPassword} />
		)
	}
}

module.exports = Keypad;