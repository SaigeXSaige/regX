import React from 'react';

import Icon from './Icon'

const Challenge = ({icons, correctInput}) => {
    return (
        <div className="challenge">
            {icons.map(icon => {
                const id = icons.indexOf(icon)
                if (Array.isArray(icon)) {
                    return correctInput ? <Icon key={icon + "1"} src={icon[1]} alt={icon[1].charAt(14)}/> : <Icon key={icon + "0"} src={icon[0]} alt={icon[0].charAt(14)}/>
                } else {
                    return <Icon key={id} src={icon} alt={icon.charAt(14)}/>}
                })
            }
        </div>    
    );
}

export default Challenge;
