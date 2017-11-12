// Total amount of all expenses

export default (expenses) => {
  return expenses
    .map((el) => el.amount)
    .reduce((prev, next) => prev + next, 0);
};
