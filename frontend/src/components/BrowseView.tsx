import React from 'react';

import { Result } from 'neverthrow';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { ItemRESTList, mediaURL, PageProps, resolveGETCall } from '../utils';

import BasePage from './elements/BasePage';

import './BrowseView.css';
import config from '../config';

export interface BrowseViewProps extends RouteComponentProps, PageProps { }

interface State {
	items: ItemRESTList;
}

export class BrowseView extends React.Component<BrowseViewProps, State> {
	constructor(props: BrowseViewProps) {
		super(props);

		this.state = {
			items: []
		};
	}

	async componentDidMount() {
		const result: Result<ItemRESTList, Error> = await resolveGETCall<ItemRESTList>('/browse/');

		result
			.map(res => {
				this.setState({ items: res });

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
						<h1 className="title" >
							browse
						</h1>
					</Row>

					<Row>
						<Col xs={11}>

							<Row className="browse">
								{this.state.items.map(item => {
									return (
										<React.Fragment>


											<Card className="product">

												<Card.Img variant="top" src={config.apiURL + mediaURL + item.seller_name + "/" + item.name + "/0.png"} className='item-image' />
												<Card.Body>
													<Card.Title className="title " >{item.name} ({item.colour})</Card.Title>
													<Card.Text className="sub1">by {item.seller_name}</Card.Text>
												</Card.Body>
											</Card>
										</React.Fragment>
									);
								})
								}
							</Row>
						</Col>
					</Row>
				</BasePage>
			</React.Fragment >
		);
	}
}