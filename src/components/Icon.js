import React from 'react';

const Icon = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className="challenge-icon animated infinite bounce" />
    );
}

export default Icon;
