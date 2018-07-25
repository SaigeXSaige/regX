import React from 'react';

import Icon from './Icon'

const Challenge = ({icons, correctInput}) => {
    let id = 0

    return (
        <div className="challenge">
            {icons.map(icon => {
                id++

                if (Array.isArray(icon)) {
                    return correctInput ? <Icon key={"00"+ id} src={icon[1]} alt={icon[1].charAt(14)}/> : <Icon key={"01"+id} src={icon[0]} alt={icon[0].charAt(14)}/>
                } else {
                    return <Icon key={id} src={icon} alt={icon.charAt(14)}/>}
                })
            }
        </div>    
    );
}

export default Challenge;
