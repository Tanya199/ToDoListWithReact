import React, {Component} from "react";
import ToDoListItem from './common/ToDoListItem.jsx';
import ToDoInputHandler from './ToDoInputHandler.jsx';

const list = [
	{
		label: 'doing english homework',
		isComplete: false
	},
	{
		label: 'doing test task',
		isComplete: false
	},
	{
		label: 'doing smth',
		isComplete: false
	}
];

export default class ToDoContainer extends Component {
	constructor() {
		super()
		this.state = {
			list: list,
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(label) {
		let list = this.state.list;
		list.push({label});
		this.setState({list})
	}

	render() {
		const {list} = this.state;

		return (
			<div>
				<ToDoInputHandler
					hintText="Enter to do "
					addItem={this.addItem}
				/>
				{list.map((i, index) => <ToDoListItem key={index} label={i.label}/>)}
			</div>
		)
	}
}