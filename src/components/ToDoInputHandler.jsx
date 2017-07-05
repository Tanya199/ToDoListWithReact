import React, {Component} from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';


export default class ToDoInputHandler extends Component {
	constructor() {
		super()
		this.state = {
			value: null
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	changeHandler(e) {
		this.setState({value: e.target.value});
	}

	onClick() {
		if (this.state.value) {
			this.props.addItem(this.state.value);
		}
	}

	render() {
		const {hintText} = this.props;
		return (
			<div>
				<TextField
					hintText={hintText}
					onChange={this.changeHandler}
				/>
				<FlatButton
					label="ADD"
					secondary={true}
					onClick={this.onClick}
				/>
			</div>
		)
	}
}