import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.state = {
      calendarFocused: null
    };
  }

  onDatesChange ({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange (calendarFocused) {
    this.setState(() => ({ calendarFocused }));
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <div className='input-group mb-2 mt-3'>
          <input
            className='form-control'
            type='text'
            placeholder='Search...'
            value={this.props.filters.text}
            onChange={(event) => {
              this.props.dispatch(setTextFilter(event.target.value));
            }}
          />
        </div>
        <div className='input-group mb-2'>
          <select
            className='form-control'
            value={this.props.filters.sortBy}
            onChange={(event) => {
              if (event.target.value === 'date') {
                this.props.dispatch(sortByDate());
              } else if (event.target.value === 'amount') {
                this.props.dispatch(sortByAmount());
              }
            }}
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
        </div>

        <div className='input-group mb-2'>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    filters: store.filters
  };
};

export default connect(
  mapStateToProps
)(ExpenseListFilters);