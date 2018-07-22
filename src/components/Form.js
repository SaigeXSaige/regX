import React from 'react';

const Form = (props) => {

    return (
        <form className="regex-input" onChange={(e) => props.handleInputChange(e.target.value)} >
          <input type="text" name="input" id="input" placeholder="Try a RegEx here" value={props.input} />  
        </form>
    )
};

export default Form;