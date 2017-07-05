import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './common/Header.jsx';
import ToDoContainer from './ToDoContainer.jsx';
export default class App extends React.Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					<ToDoContainer />
				</div>
			</MuiThemeProvider>
		);
	}
}
