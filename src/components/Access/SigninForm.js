import React from 'react';

function SigninForm({ onInputChange, onFormSubmit, onRouteChange }) {
    return (
        <div className="SigninForm">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="form-title f1 fw6 ph0 mh0">Sign In</legend>
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
                    className="submit-btn ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit" value="Sign in"
                />
            </div>
            <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">
                    <span className="underline">Register</span> with Smart Brain
                </p>
            </div>
        </div>
    );
}

export default SigninForm;