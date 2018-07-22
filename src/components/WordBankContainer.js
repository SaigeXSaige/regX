import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordBank from "./WordBank";

class WordBankContainer extends Component {
    componentDidMount(){
        this.highlightWords(this.props.textarea)
    }

    componentDidUpdate(){
        this.highlightWords(this.props.textarea)
    }
 
    highlightWords = (str) => {
        const expression = this.props.input.split("/")
        const regex = new RegExp(expression[1],expression[2])
        document.querySelector('.highlights').innerHTML = str.replace(regex, (match) => `<mark>${match}</mark>`)
    }

    render() {
        return (
            <div className="container">
                <div className="backdrop">
                    <div className="highlights" />
                </div>
                < WordBank textArea={this.props.textarea} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    textarea: state.textarea
})
  
const mapDispatchToState = dispatch => {
    return {
      handleWordBankChange: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToState)(WordBankContainer);
