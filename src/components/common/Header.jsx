import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Header extends React.Component {
	render() {
		return (
			<AppBar
				style={{margin: 'auto 0'}}
				iconElementLeft={<IconButton><NavigationClose /></IconButton>}
				title={'To Do List'}
		/>
		)
	}
}

export default Header;
