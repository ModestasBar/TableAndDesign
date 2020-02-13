export default (state = false, action) => {
  switch (action.type) {
    case 'INITIATE':
      // eslint-disable-next-line no-case-declarations
      const { value, paginate, data } = action.payload;
      return data.slice(value * paginate, value * paginate + paginate);
    case 'NO_PAGINATION':
      return false;
    case 'FIRST_PAG':
      return [...state].sort((a, b) => a.userId - b.userId);
    case 'SECOND_PAG':
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    case 'THIRD_PAG':
      return [...state].sort((a, b) => a.completed - b.completed);
    default:
      return state;
  }
};
