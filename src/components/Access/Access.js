import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import SigninForm from "./SigninForm";
import './Access.css';

class Access extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    onInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = () => {
        const { name, email, password } = this.state;
        const { route, loadUser, onRouteChange } = this.props;

        if (route === 'signin') {
            fetch('https://shrouded-crag-08266.herokuapp.com/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user.id) {
                        loadUser(user);
                        onRouteChange('home');
                    }
                });
        }

        if (route === 'register') {
            fetch('https://shrouded-crag-08266.herokuapp.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user.id) {
                        loadUser(user);
                        onRouteChange('home');
                    }
                });
        }
    }

    render() {
        const { name, email, password } = this.state;
        const { loadUser, onRouteChange, route } = this.props;

        return (
            <div className="AccessForm">
                <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="main pa4 black-80">
                        {
                            route === 'register'
                                ? <RegisterForm
                                    onRouteChange={onRouteChange}
                                    loadUser={loadUser}
                                    name={name}
                                    email={email}
                                    password={password}
                                    onInputChange={this.onInputChange}
                                    onFormSubmit={this.onFormSubmit}
                                />
                                : (route === 'signin')
                                    ? <SigninForm
                                        onRouteChange={onRouteChange}
                                        loadUser={loadUser}
                                        email={email}
                                        password={password}
                                        onInputChange={this.onInputChange}
                                        onFormSubmit={this.onFormSubmit}
                                    />
                                    : ''
                        }
                    </main>
                </article>
            </div>
        );
    }
}


export default Access;