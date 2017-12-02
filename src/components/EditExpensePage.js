import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSubmit (expense) {
    console.log(expense);
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove (event) {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push('/');
  }

  render () {
    console.log(this.props);
    return (
      <div className='container'>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button className='btn btn-secondary mt-1' onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((el) => el.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
