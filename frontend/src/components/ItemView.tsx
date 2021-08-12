import React from 'react';

import { Result } from 'neverthrow';
import { Button, Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { itemRESTLink, ItemREST, PageProps, resolveGETCall, itemTypeListRESTLink, ItemTypeREST, mediaURL } from '../utils';

import BasePage from './elements/BasePage';

import './ItemView.css';
import { FaShoppingBasket } from 'react-icons/fa';
import config from '../config';

interface MatchParams {
	name: string,
	username: string
}

export interface ItemViewProps extends RouteComponentProps<MatchParams>, PageProps { }

interface State extends ItemREST { }

export class ItemView extends React.Component<ItemViewProps, State> {
	constructor(props: ItemViewProps) {
		super(props);

		this.state = {
			name: "",
			bio: "",
			seller_name: "",
			upload_date: "",
			shape: "",
			colour: "",
			tag0: "",
			tag1: "",
			tag2: "",
			tag3: "",
			tag4: "",
			pictures: 0,
			item_types: []
		};
	}

	async componentDidMount() {
		const result: Result<ItemREST, Error> = await resolveGETCall<ItemREST>(itemRESTLink + this.props.match.params.username + "/" + this.props.match.params.name + "/");

		result
			.map(res => {
				this.setState({ ...res });

				return null; // necessary to silence warning
			})
			.mapErr(err => {
				console.error(err);
			});
	}

	handleAddToBasket = async () => {
		const resultType: Result<ItemTypeREST[], Error> = await resolveGETCall<ItemTypeREST[]>(itemTypeListRESTLink + this.props.match.params.username + "/" + this.props.match.params.name + "/");

		resultType
			.map(res => {
				var item_type = res[0];
				item_type.quantity = 1;
				this.props.addToBasket(this.state, item_type);

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
						<h1 className="title">
							{this.props.match.params.name}
						</h1>
					</Row>

					<Row>
						<Col>
							<img alt="" className="item-image" src={config.apiURL + mediaURL + this.props.match.params.username + "/" + this.props.match.params.name + "/0.png"} />
						</Col>
						<Col>
							<Row>
								<Col>
									{this.state.bio}
									<br />
									{this.state.colour}
									<br />
									{this.state.shape}
									<br />
									{this.state.tag0}
									{' '}
									{this.state.tag1}
									{' '}
									{this.state.tag2}
									{' '}
									{this.state.tag3}
									{' '}
									{this.state.tag4}
								</Col>
								<Col>
									<div style={{ float: 'right' }}>
										<Button
											onClick={this.handleAddToBasket}
											disabled={this.props.match.params.username === localStorage.username}
											className="styled-btn" variant='outline-success'>
											<FaShoppingBasket /> add 1 to basket
									</Button>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</BasePage>
			</React.Fragment>
		);
	}
}