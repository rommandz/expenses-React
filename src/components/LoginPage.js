import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => (
  <div className='login'>
    <div className='login__form'>
      <h1>Expensify</h1>
      <p>Always get that you really want</p>
      <button
        className='login__button-google'
        onClick={props.startLogin}
      >
      Login whith Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
}); 

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
