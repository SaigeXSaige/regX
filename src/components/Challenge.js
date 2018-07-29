import React from 'react';

import Icon from './Icon'

class Challenge extends React.Component {

    componentDidMount() {
        this.addBounce()    
    }

    componentDidUpdate() {
        this.addBounce()
    }

    addBounce = () => {
        const iconList = document.querySelectorAll(".challenge-icon")

        iconList.forEach( icon => icon.className.includes("animated") ? null : icon.className += "animated infinite bounce")
    }

    render() {
        let id = 0
        
        return (
            <div className="challenge">
            {this.props.icons.map(icon => {
                id++
                
                if (Array.isArray(icon)) {
                    return this.props.correctInput ? <Icon key={"00"+ id} src={icon[1]} alt={icon[1].charAt(14)}/> : <Icon key={"01"+id} src={icon[0]} alt={icon[0].charAt(14)}/>
                } else {
                    return <Icon key={id} src={icon} alt={icon.charAt(14)}/>}
                })
            }
            </div>    
        );
    }
}

export default Challenge;
