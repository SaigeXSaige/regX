import React from 'react';
import { connect } from 'react-redux';
import { changeInput } from "../redux/actions/input";

const HomeForm = (props) => {
    return (
        <form className="regex-input home-page" onChange={props.handleInputChange} >
          <input type="text" placeholder="Type expressions here" value={props.input} />  
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

export default connect(mapStateToProps, mapDispatchToState)(HomeForm);