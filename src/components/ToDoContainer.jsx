import React, {Component} from "react";
import ToDoListItem from './common/ToDoListItem.jsx';
import ToDoInputHandler from './ToDoInputHandler.jsx';
import FilteredTabs from './Tabs.jsx';

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
		super();
		this.state = {
			list: list,
			value: 'all'
		};
		this.addItem = this.addItem.bind(this);
		this.markItemAsCompleted = this.markItemAsCompleted.bind(this);
		this.filterItemsByTab = this.filterItemsByTab.bind(this);
	}

	addItem(label) {
		let list = this.state.list;
		list.push({label});
		this.setState({list})
	}

	markItemAsCompleted(label) {
		let list = this.state.list;
		list.map((i) => {
			if (i.label === label) {
				return i.isComplete = !i.isComplete;
			}
		});
		this.setState({list})
	}

	filterItemsByTab(value) {
		this.setState({value});
	}

	render() {
		let {list, value} = this.state;

		switch (value) {
			case 'completed':
				list = list.filter((i) => i.isComplete);
				break;
			case 'uncompleted':
				list = list.filter((i) => !i.isComplete);
				break;
			default:
				list;
		}

		return (
			<div>
				<FilteredTabs
					filterItemsByTab={this.filterItemsByTab}
					value={this.state.value}
				/>
				<ToDoInputHandler
					hintText="Enter to do "
					addItem={this.addItem}
				/>
				{list.map((i, index) =>
					<ToDoListItem
						key={index}
						label={i.label}
						completed={i.isComplete}
						onCheck={this.markItemAsCompleted}
					/>
				)}
			</div>
		)
	}
}