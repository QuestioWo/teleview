import React from 'react';

import { Result } from 'neverthrow';
import { Container, Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

import { ApiTest, apiTestLink, PageProps, resolveGETCall } from '../utils';

import { } from '../utils';

import BasePage from './elements/BasePage';

import './BrowseView.css';

export interface BrowseViewProps extends RouteComponentProps, PageProps { }

interface State {
	apiValue: ApiTest
}

export class BrowseView extends React.Component<BrowseViewProps, State> {
	constructor(props: BrowseViewProps) {
		super(props);

		this.state = {
			apiValue: {
				blah: ""
			}
		};
	}

	async componentDidMount() {
		const result: Result<ApiTest, Error> = await resolveGETCall<ApiTest>(apiTestLink);

		result
			.map(res => {
				this.setState({ apiValue: res });

				return null; // necessary to silence warning
			})
			.mapErr(err => {
				console.error(err);
			});
	}


	render() {
		return (
			<React.Fragment>
				<BasePage {...this.props}>
					<Row>
						<h1 className="title b">
							browse
						</h1>
					</Row>

					<Row>
						<Dropdown className="d-inline mx-2">
							<Dropdown.Toggle id="dropdown-autoclose-true">
								add region
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#">Menu Item</Dropdown.Item>
								<Dropdown.Item href="#">Menu Item</Dropdown.Item>
								<Dropdown.Item href="#">Menu Item</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

					</Row>

					<Container>
						<Row>
							<Col></Col>

							<Col xs={11}>

								<Row className="browse">

									<Card className="product">

										<Card.Img variant="top" src={process.env.PUBLIC_URL + "/bowl_1.jpg"} />
										<Card.Body>
											<Card.Title className="title" >bread baskets (cobalt)</Card.Title>
											<Card.Text className="sub1">by ANTONIO LEVI</Card.Text>
											<Card.Text className="sub2">£130</Card.Text>
										</Card.Body>
									</Card>


								</Row>

							</Col>

							<Col></Col>

						</Row>


					</Container >


					<Row>
						<div>
							{this.state.apiValue.blah}
						</div>
					</Row>

				</BasePage>
			</React.Fragment>
		);
	}
}