import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div className='expense-item'>
    <Link to={`/edit/${id}`}>
      <h3 className='expense-item__name'>{description}</h3>
    </Link>
    <div className='expense-item__description'>
      <span>{numeral(amount / 100).format('$0,0.00')}</span>
      <span>{moment(createdAt).format('MMMM, Do, YYYY')}</span>
    </div>
  </div>
);

export default ExpenseListItem;
