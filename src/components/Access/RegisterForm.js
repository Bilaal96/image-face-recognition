import React from 'react';

function RegisterForm({ onInputChange, onFormSubmit, onRouteChange }) {
    return (
        <div className="RegisterForm">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="form-title f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                        onChange={onInputChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text" name="name" id="name"
                    />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                        onChange={onInputChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email" name="email" id="email-address"
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input
                        onChange={onInputChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password" name="password" id="password"
                    />
                </div>
            </fieldset>
            <div className="">
                <input
                    onClick={onFormSubmit}
                    className="submit-btn b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit" value="Sign Up"
                />
            </div>
            <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('signin')}
                    className="f6 link dim black db pointer">
                    Already have an account?&nbsp;
                            <span className="underline">Sign In</span>
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;