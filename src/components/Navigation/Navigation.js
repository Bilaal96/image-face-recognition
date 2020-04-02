import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav id="Navigation" className="flex justify-between items-center w-100 pa3 pb0" style={{ justifyContent: 'flex-end' }}>
                <div onClick={() => onRouteChange('signin')}
                    className="f3 link dim black underline pa3 pointer">Sign Out</div>
            </nav>
        );
    } else {
        return (
            <nav id="Navigation" className="flex justify-between items-center w-100 pa3 pb0" style={{ justifyContent: 'flex-end' }}>
                <div onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign-in</div>
                <div onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</div>
            </nav>
        );
    }
}

export default Navigation;