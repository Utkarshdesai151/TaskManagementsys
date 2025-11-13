import React, { useState } from 'react';
import './Progressbar.css';
import RightArrow from '../../assets/Timeline/TimelinerightArrow.svg';

interface ProgressBarProps {
    initialPercentage: number;
    label: string;
    color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ initialPercentage, label, color }) => {
    const [percentage, setPercentage] = useState<number>(initialPercentage);

    const getProgressColor = (currentPercentage: number): string => {
        if (currentPercentage < 30) {
            return '#0ACF83';
        } else if (currentPercentage < 60) {
            return '#FFD93D';
        } else if (currentPercentage < 90) {
            return '#6BCB77';
        } else {
            return '#5051F9';
        }
    };

    const progressColor = getProgressColor(percentage);

    const handleUpgrade = () => {
        setPercentage(prevPercentage => Math.min(prevPercentage + 10, 100));
    };

    return (
        <div className="toggle-container">
            <div
                className="toggle-switch"
                style={{
                    width: `${percentage}%`,
                    backgroundColor: color, 
                }}
            >
                <div className="toggle-button"></div>
                <span className="toggle-text">{label}</span>
            </div>
            <div className="percentage-display">{percentage}%</div>
            <div className="arrow-icon">
                <img src={RightArrow} alt="arrow" />
            </div>
        </div>
    );
};

export default ProgressBar;