//node modules
import React, { Component } from 'react';
import { Input, FormGroup, FormFeedback } from 'reactstrap';
import SuccessModal from '../SuccessModal';
//components

//styling
import './style.css';

class ScheduleVisit extends Component {
	state = {
		contact_number: '',
		name: '',
		dropdown: '',
		toast: false,
		sent: false,
		loader: false,
		err: false,
		validate: {}
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value, err: false });
	};

	handleCheck = (event) => {
		event.preventDefault();
		const { selectOptionsar } = this.props;

		const { name, contact_number, dropdown } = this.state;
		if (dropdown === '') {
			this.setState({ dropdown: selectOptionsar[0].name });
		}

		const { validate } = this.state;
		if (name === '') {
			validate.nameErr = true;
		}
		if (contact_number === '') {
			validate.phnumErr = true;
		}

		this.setState(validate);

		if (validate.nameErr || validate.phnumErr) {
			this.setState({ err: true });
		} else {
			this.setState({ err: false }, (event) => {
				console.log(event);
				this.handleSubmit(event);
			});
		}
	};

	handleNameChange = async (evt) => {
		await this.setState({ [evt.target.name]: evt.target.value, err: false });

		const { name } = this.state;

		const { validate } = this.state;

		if (/^[A-z ]+$/.test(name)) {
			validate.nameErr = false;
		} else {
			validate.nameErr = true;
		}

		this.setState({ validate });
		console.log(validate);
	};

	handelPhnumChange = async (evt) => {
		await this.setState({ [evt.target.name]: evt.target.value, err: false });

		const { contact_number } = this.state;

		const { validate } = this.state;

		if (/^\d{10}$/.test(contact_number)) {
			validate.phnumErr = false;
		} else {
			validate.phnumErr = true;
		}
		this.setState({ validate });
		console.log(validate);
	};
	handelSelectChange = async (evt, SelectHandler) => {
		await this.setState({ [evt.target.name]: evt.target.value, err: false });
		const { dropdown } = this.state;
		SelectHandler(dropdown);
		console.log(this.state);
	};
	handleSubmit = async (e) => {
		this.setState({ loader: true }, () => {});
		let authKey = 'ZW13dnl4bzd4dGF6MXlvaG9zeWIxZHk0N2dyMG9rYXEwOWlzb2N6ZTNxMndoMGYyZjI=';
		const { name, contact_number, dropdown } = this.state;
		console.log(this.state);

		try {
			const res = await fetch('https://grexter.kapturecrm.com/add-update-enquiry-from-other-source.html', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${authKey}`
				},
				body: JSON.stringify([
					{
						customer_name: name,
						phone: contact_number,
						email_id: '',
						campaign_name: 'website',
						secSource: dropdown
					}
				])
			});

			const data = await res.json();
			console.log(data);
			this.setState({ loader: false, sent: data.status, toast: true }, () => {
				if (this.state.sent === 'success') {
					this.setState({ name: '', contact_number: '' });
				}
			});
		} catch (error) {
			this.setState({ loader: false, toast: true });
		}
	};

	render() {
		// prettier-ignore---------
		const { toast, loader, err, name, contact_number, validate, sent } = this.state;
		const { bookVisitClicked, selectOptionsar, SelectHandler, pending } = this.props;
		let disabledCls = '',
			disabled = false;
		console.log('trudbchdbhbds===', bookVisitClicked);
		if (bookVisitClicked === true) {
			document.getElementById('name').focus();
		}
		if (selectOptionsar && selectOptionsar.length <= 0) {
			disabledCls = 'disable-btn';
			disabled = true;
		}
		return (
			<div className="form">
				<p className="formHeader">Let us Know You..!</p>
				<form>
					<FormGroup>
						<label style={{ fontSize: '14px', fontWeight: 'bold' }}>Name :</label>
						<Input
							id="name"
							type="text"
							placeholder="Name"
							className="input-text"
							invalid={validate.nameErr}
							name="name"
							value={name}
							onChange={this.handleNameChange}
						/>
						<FormFeedback invalid>Please enter a valid name</FormFeedback>
					</FormGroup>
					<FormGroup>
						<label style={{ fontSize: '14px', fontWeight: 'bold' }}>Phone :</label>
						<Input
							maxLength="10"
							type="text"
							placeholder="Phone Number"
							className="input-text"
							name="contact_number"
							value={contact_number}
							onChange={this.handelPhnumChange}
							invalid={validate.phnumErr}
						/>
						<FormFeedback invalid>Please enter a valid phone number</FormFeedback>
					</FormGroup>
					<FormGroup>
						<label style={{ fontSize: '14px', fontWeight: 'bold' }}>Buildings :</label>
						<Input
							maxLength="10"
							type="select"
							placeholder="Phone Number"
							className="input-text"
							name="dropdown"
							onChange={(event) => this.handelSelectChange(event, SelectHandler)}
							disabled={pending}
						>
							{selectOptionsar.map((option) => {
								return <option key={option.id}>{option.name}</option>;
							})}
						</Input>
						{pending && (
							<div className="input-loader">
								<div className="loader" />
							</div>
						)}
					</FormGroup>
					<FormGroup>
						<button
							type="submit"
							className={`btn bookAVisit submit ${disabledCls}`}
							disabled={disabled}
							onClick={this.handleCheck}
						>
							{this.state.loader ? 'Sending...' : 'Submit'}
						</button>
					</FormGroup>
				</form>
				{err ? <div className="error-text">Please Fill in all the fields before proceeding</div> : null}
				{toast ? (
					<SuccessModal
						isOpen={toast}
						closeModal={() => {
							this.setState({ toast: false });
						}}
					>
						<div className="sched-suc-modal-h">{sent === 'success' ? 'Great!' : 'Oops!'}</div>
						<div className="sched-suc-modal-b">
							{sent === 'success' ? 'We will contact you within 24 to 48 hours..!' : 'try again!'}
						</div>
					</SuccessModal>
				) : null}
			</div>
		);
	}
}

export default ScheduleVisit;
