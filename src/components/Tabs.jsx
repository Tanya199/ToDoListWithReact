import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class FilteredTabs extends Component{

	render() {
		return(
			<Tabs
				value={this.props.value}
				onChange={this.props.filterItemsByTab}
			>
				<Tab label="All" value="all"/>
				<Tab label="Uncompleted" value="uncompleted"/>
				<Tab label="Completed" value="completed"/>
			</Tabs>
		)
	}
}