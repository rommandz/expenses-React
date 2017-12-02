import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
  <nav className='navbar navbar-dark bg-dark mb-3'>
    <div className='container'>
      <NavLink to="/dashboard" className='navbar-brand'>Expensify</NavLink>
      {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
      <button
        className ='btn btn-info' onClick={props.startLogout}
      >
        Logout
      </button>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
