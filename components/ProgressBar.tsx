
import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const progressPercentage = total > 1 ? (current / (total - 1)) * 100 : 0;

    return (
        <div className="w-full bg-slate-200 h-2">
            <div 
                className="bg-gradient-to-r from-sky-500 to-teal-500 h-2 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};
