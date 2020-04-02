import React from 'react';

const Entries = ({ name, entries }) => {
    return (
        <div>
            <div className="f3 b">{`${name}, your entry count is:`}</div>
            <div className="f1">#{entries}</div>
        </div>
    );
}

export default Entries;