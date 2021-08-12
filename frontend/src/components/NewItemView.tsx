import React from 'react';

import { Result } from 'neverthrow';
import { Col, Button, Form, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { ItemREST, ItemSubmitREST, itemSubmitRESTLink, PageProps, resolvePOSTCall, ItemTypeRESTNewSubmit, ItemTypeREST, itemTypeRESTNewSubmitLink } from '../utils';

import BasePage from './elements/BasePage';

import './NewItemView.css';

export interface NewItemViewProps extends RouteComponentProps, PageProps { }

interface State extends ItemSubmitREST, ItemTypeRESTNewSubmit {
	name: string
}

export class NewItemView extends React.Component<NewItemViewProps, State> {
	constructor(props: NewItemViewProps) {
		super(props);

		this.state = {
			bio: "",
			shape: "",
			colour: "",
			tag0: "",
			tag1: "",
			tag2: "",
			tag3: "",
			tag4: "",
			pictures: [],
			name: "",
			price: 0,
			quantity: 0,
			size: "",
			available: true
		};
	}

	handleImageUpdate = (event: any) => {
		var pictures: string[] = [];
		for (var i = 0; i < event.target.files.length; ++i) {
			const reader = new FileReader();
			reader.onload = () => {
				var settingString;
				if (reader.result === null || reader.result instanceof ArrayBuffer) {
					settingString = "";
				} else {
					settingString = reader.result;
				}
				pictures.push(settingString);
			};

			reader.readAsDataURL(event.target.files[i]);
		}

		this.setState({ pictures: pictures });
	}

	handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data: ItemSubmitREST = this.state;

		const path = itemSubmitRESTLink + localStorage.username + "/" + this.state.name + "/";

		const result: Result<ItemREST, Error> = await resolvePOSTCall<ItemREST, ItemSubmitREST>(path, data, true);

		result
			.map(async res => {
				const dataType: ItemTypeRESTNewSubmit = this.state;

				const path = itemTypeRESTNewSubmitLink + localStorage.username + "/" + this.state.name + "/";

				const result: Result<ItemTypeREST, Error> = await resolvePOSTCall<ItemTypeREST, ItemTypeRESTNewSubmit>(path, dataType, true);

				result
					.map(resType => {
						this.props.updateAlertBar("Successfully created item", "success", true);

						this.props.history.push('/item/' + localStorage.username + "/" + res.name);

						return null; // necessary to silence warning
					})
					.mapErr(errType => {
						const message: string = "Item already exists with that name, try again with a new name or re-log in";

						this.props.updateAlertBar(message, "danger", true);

						console.error(errType);
					});

				return null; // necessary to silence warning
			})
			.mapErr(err => {
				const message: string = "Item already exists with that name, try again with a new name or re-log in";

				this.props.updateAlertBar(message, "danger", true);

				console.error(err);
			});
	}

	render() {
		return (
			<React.Fragment>
				<BasePage {...this.props}>
					<Row>
						<h2 className="title">
							create a new item
						</h2>
					</Row>

					<Form onSubmit={this.handleFormSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>name</Form.Label>
							<Form.Control
								required
								type="text"
								value={this.state.name}
								onChange={(event: any) => { this.setState({ name: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>bio</Form.Label>
							<Form.Control
								required
								type="text"
								as="textarea"
								value={this.state.bio}
								placeholder='description'
								onChange={(event: any) => { this.setState({ bio: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>shape/style</Form.Label>
							<Form.Control
								required
								type="text"
								value={this.state.shape}
								placeholder='shirt'
								onChange={(event: any) => { this.setState({ shape: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>colour</Form.Label>
							<Form.Control
								required
								type="text"
								value={this.state.colour}
								placeholder='black'
								onChange={(event: any) => { this.setState({ colour: event.target.value }) }} />
						</Form.Group>

						<Row>
							<Form.Label>tags</Form.Label>
						</Row>
						<Row>
							<Col>
								<Form.Group className="mb-3">
									<Form.Control
										type="text"
										value={this.state.tag0}
										placeholder='modern'
										onChange={(event: any) => { this.setState({ tag0: event.target.value }) }} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Control
										type="text"
										value={this.state.tag1}
										placeholder='streetwear'
										onChange={(event: any) => { this.setState({ tag1: event.target.value }) }} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Control
										type="text"
										value={this.state.tag2}
										placeholder='trendy'
										onChange={(event: any) => { this.setState({ tag2: event.target.value }) }} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Control
										type="text"
										value={this.state.tag3}
										placeholder='kitsch'
										onChange={(event: any) => { this.setState({ tag3: event.target.value }) }} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Control
										type="text"
										value={this.state.tag4}
										placeholder='classy'
										onChange={(event: any) => { this.setState({ tag4: event.target.value }) }} />
								</Form.Group>
							</Col>
						</Row>

						<Form.Group className="mb-3">
							<Form.Label>price</Form.Label>
							<Form.Control
								required
								type="number"
								value={this.state.price}
								onChange={(event: any) => { this.setState({ price: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>size</Form.Label>
							<Form.Control
								required
								type="text"
								value={this.state.size}
								placeholder='Medium'
								onChange={(event: any) => { this.setState({ size: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>quantity</Form.Label>
							<Form.Control
								required
								type="number"
								value={this.state.quantity}
								onChange={(event: any) => { this.setState({ quantity: event.target.value }) }} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="profile_picture">
							<Form.Label>pictures (.png, 2Mb max, 5 images max)</Form.Label>
							<Form.Control
								required
								type="file"
								accept={'.png'}
								multiple
								onChange={this.handleImageUpdate} />
						</Form.Group>

						<Button type='submit' className='styled-btn' variant='outline-success'>
							submit
						</Button>
					</Form>
				</BasePage>
			</React.Fragment>
		);
	}
}