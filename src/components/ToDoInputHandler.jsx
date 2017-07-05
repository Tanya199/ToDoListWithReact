import React, {Component} from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

const list = [
	'doing english homework',
	'doing test task',
	'doing smth'
];
export default class ToDoInputHandler extends Component {
	constructor() {
		super()
		this.state = {
			list: list,
			searchValue: null
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({searchValue: e.target.value});
	}

	render() {
		const {list, searchValue} = this.state;
		const filteredList = searchValue ? list.filter((i) => {
			return i.includes(searchValue)
		}) : list;
		return (
			<div>
				<TextField
					hintText="Enter to do "
					onChange={this.handleChange}
				/>
				{filteredList.map((i) => <Checkbox key={i} label={i}/>)}
			</div>
		)
	}
}