import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount > 1 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h3>
        Viewing {props.expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h3>       
    </div>
  );
};

const mapStateToProps = (state) => ({
  expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters)),
  expensesCount: selectExpenses(state.expenses, state.filters).length
});

export default connect(
  mapStateToProps
)(ExpensesSummary);
