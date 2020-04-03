import React from 'react';
import './Entries.css';

const Entries = ({ name, entries }) => {
    return (
        <div className="Entries">
            <div className="user f3 b">{`${name}, your entry count is:`}</div>
            <div className="rank f1">#{entries}</div>
        </div>
    );
}

export default Entries;