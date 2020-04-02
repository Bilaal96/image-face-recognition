import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div>
            <p className="f3">{'This Magic Brain will detect Faces in your pictures. Give it a try! :]'}</p>

            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input onChange={onInputChange} className="f4 pa2 w-70 br2 center mr4" type="text" placeholder="Insert Image URL..."></input>
                    <button onClick={onImageSubmit} className=" detect-btn f4 w-30 ph3 pv2 br2 dib white link grow">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;