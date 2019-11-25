import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

function Contact() {
	const [ phoneNumbers, setPhoneNumbers ] = useState([]);
	const [ emailAddress, setEmailAddress ] = useState([]);
	const [ address, setAddress ] = useState([]);
	const [ formdata, setFormdata ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [ error, setError ] = useState(false);
	const [ message, setMessage ] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
		if (!formdata.name) {
			this.setState({
				error: true,
				message: 'Name is required'
			});
		} else if (!formdata.email) {
			setError(true);
			setMessage('Email is required');
		} else if (!formdata.subject) {
			setError(true);
			setMessage('Subject is required');
		} else if (!formdata.message) {
			setError(true);
			setMessage('Message is required');
		} else {
			setError(false);
			setMessage('You message has been sent !');
		}
	};
	const handleChange = (event) => {
		setFormdata({
			...formdata,
			[event.currentTarget.name]: event.currentTarget.value
		});
	};
	const numberFormatter = (number) => {
		const phnNumber = number;
		return phnNumber;
	};

	const handleAlerts = () => {
		if (error && message) {
			return <div className="alert alert-danger mt-4">{message}</div>;
		} else if (!error && message) {
			return <div className="alert alert-success mt-4">{message}</div>;
		} else {
			return null;
		}
	};

	useEffect(() => {
		axios.get('/api/contactinfo').then((response) => {
			setPhoneNumbers(response.data.phoneNumbers);
			setEmailAddress(response.data.emailAddress);
			setAddress(response.data.laddress);
		});
	}, []);

	return (
		<Layout>
			<div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
				<div className="container">
					<Sectiontitle title="Contactez Moi" />
					<div className="row">
						<div className="col-lg-6">
							<div className="mi-contact-formwrapper">
								<h4>Restons en contact</h4>
								<form
									action="mailto:garyh170797@gmail.com"
									className="mi-form mi-contact-form"
									onSubmit={submitHandler}
								>
									<div className="mi-form-field">
										<label htmlFor="contact-form-name">Entrer votre nom *</label>
										<input
											onChange={handleChange}
											type="text"
											name="name"
											id="contact-form-name"
											value={formdata.name}
										/>
									</div>
									<div className="mi-form-field">
										<label htmlFor="contact-form-email">Entrer votre adresse mail *</label>
										<input
											onChange={handleChange}
											type="text"
											name="email"
											id="contact-form-email"
											value={formdata.email}
										/>
									</div>
									<div className="mi-form-field">
										<label htmlFor="contact-form-subject">Entrer votre objet *</label>
										<input
											onChange={handleChange}
											type="text"
											name="subject"
											id="contact-form-subject"
											value={formdata.subject}
										/>
									</div>
									<div className="mi-form-field">
										<label htmlFor="contact-form-message">Entrer votre message *</label>
										<textarea
											onChange={handleChange}
											name="message"
											id="contact-form-message"
											cols="30"
											rows="6"
											value={formdata.message}
										/>
									</div>
									<div className="mi-form-field">
										<button className="mi-button" type="submit">
											ENVOYEZ MOI UN MAIL
										</button>
									</div>
								</form>
								{handleAlerts()}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mi-contact-info">
								{!phoneNumbers ? null : (
									<div className="mi-contact-infoblock">
										<span className="mi-contact-infoblock-icon">
											<Icon.Phone />
										</span>
										<div className="mi-contact-infoblock-content">
											<h6>Téléphone</h6>
											{phoneNumbers.map((phoneNumber) => (
												<p key={phoneNumber}>
													<a href={numberFormatter(phoneNumber)}>{phoneNumber}</a>
												</p>
											))}
										</div>
									</div>
								)}
								{!emailAddress ? null : (
									<div className="mi-contact-infoblock">
										<span className="mi-contact-infoblock-icon">
											<Icon.Mail />
										</span>
										<div className="mi-contact-infoblock-content">
											<h6>Email</h6>
											{emailAddress.map((email) => (
												<p key={email}>
													<a href={`mailto:${email}`}>{email}</a>
												</p>
											))}
										</div>
									</div>
								)}
								{!phoneNumbers ? null : (
									<div className="mi-contact-infoblock">
										<span className="mi-contact-infoblock-icon">
											<Icon.MapPin />
										</span>
										<div className="mi-contact-infoblock-content">
											<h6>Adresse</h6>
											<p>2 rue Baudin, 92300 Levallois-Perret, France</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
