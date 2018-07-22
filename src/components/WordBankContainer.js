import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordBank from "./WordBank";

class WordBankContainer extends Component {
    render() {
        return (
            <div class="container">
                <div class="backdrop">
                    <div class="highlights">
                        {/* cloned text with <mark> tags here */}
                    </div>
                </div>
                < WordBank textArea={this.props.textarea} />
            </div>
        );
    }
}

export default connect((state)=> ({textarea: state.textarea, input: state.input}))(WordBankContainer);
