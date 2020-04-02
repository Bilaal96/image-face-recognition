import React from 'react';

const Navigation = ({ route, onRouteChange }) => {
    const signinRoute = (
        <nav id="Navigation" className="flex justify-between items-center w-100 pa3 pb0" style={{ justifyContent: 'flex-end' }}>
            <div onClick={() => onRouteChange('register')}
                className="f3 link dim black underline pa3 pointer">Register</div>
        </nav>
    );

    const registerRoute = (
        <nav id="Navigation" className="flex justify-between items-center w-100 pa3 pb0" style={{ justifyContent: 'flex-end' }}>
            <div onClick={() => onRouteChange('signin')}
                className="f3 link dim black underline pa3 pointer">Sign-in</div>
        </nav>
    );

    const homeRoute = (
        <nav id="Navigation" className="flex justify-between items-center w-100 pa3 pb0" style={{ justifyContent: 'flex-end' }}>
            <div onClick={() => onRouteChange('signin')}
                className="f3 link dim black underline pa3 pointer">Sign Out</div>
        </nav>
    );

    switch (route) {
        case 'signin':
            return signinRoute;
        case 'register':
            return registerRoute;
        case 'home':
            return homeRoute;
        default:
            return signinRoute;
    }
}

export default Navigation;