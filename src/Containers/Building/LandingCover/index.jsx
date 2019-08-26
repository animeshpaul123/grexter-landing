import React from 'react';
import Form from '../../../Components/Form';
import { Row, Col } from 'reactstrap';

const LandingCover = (props) => {
	return (
		<React.Fragment>
			<Row>
				<Col md="6">
					<div className="centerText d-md-flex h-100 justify-content-center flex-column text-left">
						<h1>Grexter landing Page</h1>
						<h4>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi itaque eum mollitia at
							aliquid quos neque vero est iure.
						</h4>
					</div>
				</Col>
				<Col md="6">
					<div className="formCard">
						<Form />
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
};
export default LandingCover;
