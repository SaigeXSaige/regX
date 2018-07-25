import React from 'react';

import Icon from './Icon'

const Challenge = ({icons, correctInput}) => {
    return (
        <div className="challenge">
            {icons.map(icon => {
                if (Array.isArray(icon)) {
                    return correctInput ? <Icon src={icon[1]} alt={icon[1].charAt(14)}/> : <Icon src={icon[0]} alt={icon[0].charAt(14)}/>
                } else {
                    return <Icon src={icon} alt={icon.charAt(14)}/>}
                })
            }
        </div>    
    );
}

export default Challenge;
