import React from 'react';

import { Result } from 'neverthrow';
import { Container, Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import Card from 'react-bootstrap/Card';

import { ApiTest, apiTestLink, PageProps, resolveGETCall } from '../utils';

import BasePage from './elements/BasePage';

import './MediaView.css';

interface MatchParams {
	media_id: string
}

export interface MediaViewProps extends RouteComponentProps<MatchParams>, PageProps { }

interface State {
	apiValue: ApiTest
}

export class MediaView extends React.Component<MediaViewProps, State> {
	constructor(props: MediaViewProps) {
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

					<Container>
						<Row>
							<Col xs={6}>
								<Card
									className="product">

									<Card.Img variant="top" src={process.env.PUBLIC_URL + "/bowl_1.jpg"} />

								</Card>

							</Col>

							<Col xs={5} className="p2">
								<Row>
									<h1 className="title t">
										bread baskets (cobalt)

									</h1>
									<h3 className="sub1">by ANTONIO LEVI</h3>

									<h5 className="sub2"> Ceramic bread baskets beautifully handcrafted by Julie Kettering,
										a Bristol based artist, finished with a cobalt glaze.</h5>

									<h3 className="title s"> £130</h3>


									<a href="something" className="button">ADD TO BASKET</a>
								</Row>
							</Col>
						</Row>

						<Row className="p1">
							<Col></Col>
							<Col></Col>
						</Row>
					</Container>

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