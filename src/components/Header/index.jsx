import React from 'react';
import logo from '../../static/images/logo-white.png';

const Header = (props) => {
	const { headerClassName } = props;
	return (
		<header className={headerClassName ? 'header ' + headerClassName : 'header'}>
			<div className="headerContainer" style={{ position: 'relative' }}>
				<img src={logo} className="logo lazy" alt="logo" />
			</div>
		</header>
	);
};

export default Header;
