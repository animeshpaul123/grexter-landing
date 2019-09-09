import React from 'react';
import Form from '../../../Components/Form';
import { Row, Col } from 'reactstrap';
import './style.css';
import Button from '../../../Components/Button';

const LandingCover = (props) => {
	const { name, desc, bookVisitClicked, selectOptionsar, bookVisitClickHandler, showFixedBtn } = props;
	const styleFixed = showFixedBtn ? 'fixed-anim' : null;
	return (
		<React.Fragment>
			<Row className="CoverRow">
				<Col md="6">
					<div className="centerText d-md-flex h-100 pt-4 flex-column text-left">
						<h1>{name}</h1>
						<h4>{desc}</h4>
						{name ? (
							''
						) : (
							<span className="welcome-wrapper">
								<h2 className="welcome">
									<span className="living-spaces">Living Spaces </span> for the young{' '}
								</h2>
								<p className="subWelcome">
									Adulting is stressful enough - finding the perfect pad doesn't have to be!
								</p>
							</span>
						)}
					</div>
				</Col>
				<Col md="6">
					<div className="formCard" id="form">
						<Form bookVisitClicked={bookVisitClicked} selectOptionsar={selectOptionsar} />
					</div>
				</Col>
			</Row>
			{showFixedBtn && (
				<div className={'fixed-button-container d-md-none ' + styleFixed}>
					<Button className="fixed-button" onClick={bookVisitClickHandler}>
						Contact Us
					</Button>
				</div>
			)}
		</React.Fragment>
	);
};
export default LandingCover;
