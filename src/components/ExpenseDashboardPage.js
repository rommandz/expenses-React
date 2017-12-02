import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div className='container'>
    <ExpensesSummary />
    <ExpenseListFilters />
    <NavLink className='btn btn-success mb-4' to="/create">
      Create Expense
    </NavLink>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
