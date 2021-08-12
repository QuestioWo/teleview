import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import { PageProps } from '../utils';

import BasePage from './elements/BasePage';

import './HomeView.css';

export interface HomeViewProps extends RouteComponentProps, PageProps { }

interface State { }

export class HomeView extends React.Component<HomeViewProps, State> {
	// constructor(props: HomeViewProps) {
	// 	super(props);

	// 	this.state = {
	// 	};
	// }

	async componentDidMount() {
		/*
		const result: Result<ApiTest, Error> = await resolveGETCall<ApiTest>(apiTestLink);

		result
			.map(res => {
				this.setState({ apiValue: res });

				return null; // necessary to silence warning
			})
			.mapErr(err => {
				console.error(err);
			});
			*/
	}


	render() {
		return (
			<React.Fragment>
				<BasePage {...this.props}>

					<Row>
						<h2 className="subtitle">
							Connecting you to your community through art.<br></br>
							Local arists using sutainable methods, curated by us.
						</h2>
					</Row>

					<Row className="content">

						<Col>
							<Row>
								<h1 className="title">
									featured artists
								</h1>
							</Row>
							<Row>
								<Carousel className="artists">
									<Carousel.Item>
										<Link to={'/profile/'}>
											<img
												className="d-block w-100"
												src={process.env.PUBLIC_URL + '/artist_jo.jpg'}
												alt="First slide"
											/>
										</Link>
										<Carousel.Caption>
											<h3>Jo Motawe</h3>
											<p>Bristol-based Textile Artist</p>
										</Carousel.Caption>
									</Carousel.Item>

									<Carousel.Item>
										<Link to={'/profile/'}>
											<img
												className="d-block w-100"
												src={process.env.PUBLIC_URL + '/artist_leo.jpg'}
												alt="Second slide"
											/>
										</Link>

										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<Link to={'/profile/'}>
											<img
												className="d-block w-100"
												src={process.env.PUBLIC_URL + '/artist_marsha.jpg'}
												alt="Third slide"
											/>
										</Link>

										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>

									<Carousel.Item>
										<img
											className="d-block w-100"
											src={process.env.PUBLIC_URL + '/artist_david.jpg'}
											alt="Second slide"
										/>

										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>

								</Carousel>
							</Row>
						</Col>

						<Col>
							<Row>
								<h1 className="title">
									featured pieces
								</h1>
							</Row>
							<Row>
								<Carousel className="pieces">
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="holder.js/800x400?text=First slide&bg=373940"
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3>First slide label</h3>
											<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="holder.js/800x400?text=Second slide&bg=282c34"
											alt="Second slide"
										/>

										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="holder.js/800x400?text=Third slide&bg=20232a"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</Row>
						</Col>

					</Row>

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