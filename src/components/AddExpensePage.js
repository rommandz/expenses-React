import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

class AddExpensePage extends React.Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (expense) {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
    console.log(this.props);
  }

  render () {
    return (
      <div className='container'>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
