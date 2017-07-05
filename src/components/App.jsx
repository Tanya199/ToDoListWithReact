import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './common/Header.jsx';
import ToDoInputHandler from './ToDoInputHandler.jsx';
export default class App extends React.Component {

	render() {
		return (

			<MuiThemeProvider>
				<div>
					<Header />
					<ToDoInputHandler />
				</div>
			</MuiThemeProvider>
		);
	}
}
