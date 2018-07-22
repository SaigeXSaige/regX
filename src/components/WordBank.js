import React from 'react';
import { connect } from 'react-redux';

import { changeWordBank } from "../redux/actions/input";

const WordBank = ({textArea, handleWordBankChange}) => {
    return <textarea className="input" id="word-bank" cols="30" rows="10" maxLength="110" value={textArea} onChange={handleWordBankChange}/>;
}

const mapDispatchToState = dispatch => {
    return {
      handleWordBankChange: (e) => dispatch(changeWordBank(e.target.value))
    }
}

export default connect(null, mapDispatchToState)(WordBank);
