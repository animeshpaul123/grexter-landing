import React from 'react';
import logoWhite from '../../static/images/logo-white.png';
import insta from '../../static/images/insta.png';
import fb from '../../static/images/fb.png';
import lnkd from '../../static/images/lnkd.png';
import './style.css';

const Footer = (props) => {
	const { logoLink, phone, instagram, linkedin, facebook } = props;
	return (
		<footer>
			<div className="logo-wrapper d-flex">
				<div className="footer-content">
					<div className="logo">
						<img src={logoWhite} className="w-100 lazy" alt="" />
					</div>
					<div className="Footervisit visit-us">
						<a href={logoLink ? logoLink : 'https://truedesigner.in'} className="btn bookAVisit bgYellow">
							Visit Us
						</a>
					</div>
				</div>
			</div>
			<div className="info-wrapper">
				<div className="contact">
					<span className="title">Contact Us:</span>
					<span className="phone">
						<a href={`tel:+91${phone}`}>
							<i className="fas fa-phone-alt mr-2" />
							{`(+91) ${phone}`}
						</a>
					</span>
					<span className="mail">
						<a href={`mailto:support@${logoLink.substring(8)}`}>
							<i className="fas fa-envelope mr-2" />
							{`support@${logoLink.substring(8)}`}
						</a>
					</span>
					<span className="social">
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<img src={lnkd} alt="LinkedIn" />
						</a>
						<a href={facebook} target="_blank" rel="noopener noreferrer">
							<img src={fb} alt="Facebook" />
						</a>
						<a href={instagram} target="_blank" rel="noopener noreferrer">
							<img src={insta} alt="Instagram" />
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
