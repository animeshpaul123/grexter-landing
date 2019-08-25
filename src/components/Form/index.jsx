import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<div className="openForm" id="go-to-form">
				<div className="row d-md-flex align-items-center justify-content-center formRow">
					<div className="col-md-6 col-lg-6 col-sm-12 no-gutters">
						<div className="centerText">
							<h1>Grexter landing Page</h1>
							<h4>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi itaque eum mollitia at
								aliquid quos neque vero est iure.
							</h4>
						</div>
					</div>
					<div className="col-md-6 col-lg-6 col-sm-12 no-gutters">
						<div className="card formCard">
							<h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
							<form className="target" action="http://localhost:5000/mail/api" method="POST">
								<div className="form-group">
									<label for="name">Name</label>
									<input
										type="text"
										className="form-control name"
										id="customer_name"
										placeholder="Your Name"
										required="required"
										pattern="^[A-Za-z]*$"
										title="Name should be atleast 3 characters"
										name="customer_name"
									/>
								</div>
								<div className="form-group">
									<label for="password">Phone</label>
									<input
										type="text"
										className="form-control phone"
										id="phone"
										placeholder="Phone Number"
										required="required"
										pattern="^[0-9]{10}"
										title="phone number should be 10 numbers"
										name="phone"
									/>
								</div>
								<button type="submit" className="btn bookAVisit submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Form;
