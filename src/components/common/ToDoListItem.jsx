import React, {Component} from 'react';
import Checkbox from "material-ui/Checkbox";


export default class ToDoListItem extends Component {
	render() {
		const {label, onCheck, completed} = this.props;
		return (
			<Checkbox
				onCheck={onCheck.bind(this,label)}
				label={label}
				checked={completed}
			/>
		)
	}
}