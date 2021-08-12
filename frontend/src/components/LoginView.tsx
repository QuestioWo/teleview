import React from 'react';

<<<<<<< HEAD
import { Result } from 'neverthrow';
import { Container, Col, Row } from 'react-bootstrap';
=======
import { Row, Container, Col } from 'react-bootstrap';
>>>>>>> 9ba1425b0a990e553b8e2d78eaaf3193d42a373b
import { RouteComponentProps } from 'react-router';

import { PageProps } from '../utils';

import BasePage from './elements/BasePage';
import LoginForm from './elements/CredentialForm';

import './LoginView.css';

export interface LoginViewProps extends RouteComponentProps, PageProps { }

interface State { }

export class LoginView extends React.Component<LoginViewProps, State> {
	render() {
		return (
			<React.Fragment>
				<BasePage {...this.props}>
					<Container>
						<Row>
							<Col></Col>

							<Col xs={6}>
								<Row>
									<h1 className="title">
										login
									</h1>
								</Row>

								<Row>
									<LoginForm {...this.props} />
								</Row>
							</Col>

							<Col></Col>

						</Row>

						render() {
		return (
						<React.Fragment>
							<BasePage {...this.props}>
								<Container>
									<Row>
										<Col></Col>

										<Col xs={6}>
											<Row>
												<h1 className="title">
													Login
												</h1>
											</Row>

											<Row>
												<div>
													{this.state.apiValue.blah}
												</div>
											</Row>

											<Row>
												<LoginForm {...this.props} />
											</Row>
										</Col>

										<Col></Col>

									</Row>
								</Container >

							</BasePage>
						</React.Fragment>
						);
	}
}