import React from 'react';
import { connect } from 'react-redux';
import { changeInput } from "../redux/actions/input";

const Form = (props) => {

    return (
        <form className="regex-input" onChange={props.handleInputChange} >
          <input type="text" placeholder="Try a RegEx here" value={props.input} />  
        </form>
    )
};

const mapStateToProps = state => ({
    ...state,
    input: state.input
})
  
const mapDispatchToState = dispatch => {
    return {
      handleInputChange: (e) => dispatch(changeInput(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Form);