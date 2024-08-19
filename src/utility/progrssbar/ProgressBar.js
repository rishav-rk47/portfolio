import React from 'react';
import './ProgressBar.css';

const GradientProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default GradientProgressBar;
