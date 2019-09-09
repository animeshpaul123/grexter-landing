import React from 'react';
import logo from '../../static/images/logo-white.png';
import { FaPhone } from 'react-icons/fa';
import './style.css';

const Header = () => {
	return (
		<header className="header">
			<div className="headerContainer" style={{ position: 'relative' }}>
				<img src={logo} className="logo lazy" alt="logo" />
				<div className="header-phone">
					<a href="tel:+918880968000" title="Phone">
						<FaPhone />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
