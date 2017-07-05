import React, {Component} from 'react';
import Checkbox from "material-ui/Checkbox";


export default class ToDoListItem extends Component {
	constructor() {
		super()
	}

	render() {
		const {label} = this.props;
		return (
			<Checkbox label={label}/>
		)
	}
}