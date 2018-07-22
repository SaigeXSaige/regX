import React from 'react';

const WordBank = ({textArea}) => {
    return <textarea className="input" id="word-bank" cols="30" rows="10" value={textArea}/>;
}

export default WordBank;
