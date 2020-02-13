export default (state = false, action) => {
  switch (action.type) {
    case 'SORT':
      return !state;
    case 'NO_SORT':
      return false;
    default:
      return state;
  }
};
