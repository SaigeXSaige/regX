import React from 'react';

class Icon extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render( ) {
        return (
            <img src={this.props.src} alt={this.props.alt} className={`challenge-icon char-${this.props.alt} animated infinite bounce`} />
        );

    }
}

export default Icon;
