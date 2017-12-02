import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div className='expenses__dashboard'>
    {props.expenses.length === 0 ? (
      <p className='expenses__info'>No expenses</p>
    ) : (
      props.expenses.map((el) => (
        <ExpenseListItem key={el.id} {...el} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(
  mapStateToProps
)(ExpenseList);