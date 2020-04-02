import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl, faceBoxes }) => {
    return (
        <div className="center ma4">
            <div className="relative">
                <img id="input-image" src={imageUrl} width="500px" height="auto" alt="Face Detection" />
                {faceBoxes.map((faceBox, i) => {
                    const { topRow, leftCol, bottomRow, rightCol } = faceBox;
                    return (
                        <div key={`face-${i}`} className="bounding-box grow" style={{
                            "top": topRow,
                            "right": rightCol,
                            "bottom": bottomRow,
                            "left": leftCol
                        }}></div>
                    );
                })}
            </div>
        </div>
    );
}

export default FaceDetection;