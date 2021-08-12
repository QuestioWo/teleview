import React from 'react';

import { Result } from 'neverthrow';
import { Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { ApiTest, apiTestLink, ItemRESTList, PageProps, resolveGETCall } from '../utils';

import BasePage from './elements/BasePage';

import './BrowseView.css';
import { Link } from 'react-router-dom';

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
						{this.state.items.map(item => {
							return (
								<React.Fragment>
									<Link to={'/item/' + item.seller_name + "/" + item.name}>
										{item.name}
									</Link>
								</React.Fragment>
							);
						})
						}
					</Row>
				</BasePage>
			</React.Fragment>
		);
	}
}