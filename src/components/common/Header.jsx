import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/social/cake';

class Header extends React.Component {
	render() {
		return (
			<AppBar
				style={{margin: 'auto 0'}}
				iconElementLeft={<IconButton><NavigationClose /></IconButton>}
				title={<span style={{justifyContent: 'center'}}>To Do List</span>}
		/>
		)
	}
}

export default Header;
