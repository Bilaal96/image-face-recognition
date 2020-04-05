import React, { Component, Fragment } from 'react';
//? Packages
import Particles from 'react-particles-js'; // Particle Effects
//? Components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import AccessForm from './components/Access/Access';
import Entries from './components/Entries/Entries';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceDetection from './components/FaceDetection/FaceDetection';
//? CSS
import './App.css';

const particlesOptions = {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 700
			}
		},
		"line_linked": {
			"shadow": {
				"enable": true,
				"color": "#3CA9D1",
				"blur": 2
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse",
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		}
	}
};

const initialState = {
	input: '',
	imageUrl: '',
	faceBoxes: [],
	route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	}
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}


	loadUser = (data) => {
		const { id, name, email, entries, joined } = data;
		this.setState({
			user: {
				id,
				name,
				email,
				entries,
				joined
			}
		});
	}

	onRouteChange = (route) => {
		if (route === 'signin') {
			this.setState(initialState);
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}

		this.setState({ route });
	}

	onInputChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}

	onImageSubmit = () => {
		if (this.state.input !== '') {
			console.log('Detect!');

			// NOTE: this.state.imageUrl is passed to FaceDetection as Prop to display image
			this.setState(state => ({
				imageUrl: state.input,
				faceBoxes: []
			}));

			// Use API response to calculate coordinates of detected face within the image & update state
			fetch('https://shrouded-crag-08266.herokuapp.com/image/detect', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					input: this.state.input
				})
			})
				.then(response => response.json())
				.then(prediction => {
					console.log('Clarifai API Predictions:', prediction);

					// Update No. of User Entries
					if (prediction) {
						fetch('https://shrouded-crag-08266.herokuapp.com/image/entries', {
							method: 'PUT',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								id: this.state.user.id
							})
						})
							.then(response => response.json())
							.then(count => {
								this.setState(
									Object.assign(
										this.state.user, { entries: count }
									)
								);
							})
							.catch(console.log);
					}

					const faceBoxLocations = this.calcFaceBoxLocations(prediction);
					this.setFaceBoxesInState(faceBoxLocations);
				}
				)
				.catch(err => console.log(err));
		} else {
			console.log('No input');
		}
	}

	calcFaceBoxLocations = (response) => {
		const boundingBoxes = response.outputs[0].data.regions.map(box => box.region_info.bounding_box);
		const image = document.getElementById('input-image');
		const width = Number(image.width);
		const height = Number(image.height);
		console.log('boundingBoxes', boundingBoxes);

		return boundingBoxes.map(face => ({
			topRow: face.top_row * height,
			leftCol: face.left_col * width,
			bottomRow: height - (face.bottom_row * height),
			rightCol: width - (face.right_col * width)
		}));
	}

	setFaceBoxesInState = (faceBoxLocations) => {
		this.setState({ faceBoxes: faceBoxLocations });
	}

	renderHome = () => {
		const { imageUrl, faceBoxes, user } = this.state;
		return (
			<Fragment>
				<Entries name={user.name} entries={user.entries} />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onImageSubmit={this.onImageSubmit}
				/>
				{imageUrl !== '' ? <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} /> : ''}
			</Fragment>
		);
	}

	render() {
		const { route, isSignedIn } = this.state;

		return (
			<div className="App" >
				<Particles className="particles"
					params={particlesOptions} />

				<Navigation
					route={route}
					onRouteChange={this.onRouteChange}
					isSignedIn={isSignedIn}
				/>
				<Logo />


				{route === 'home'
					? this.renderHome()
					: <AccessForm
						onInputChange={this.onInputChange}
						route={route}
						onRouteChange={this.onRouteChange}
						loadUser={this.loadUser}
					/>
				}
			</div>
		);
	}

}

export default App;
