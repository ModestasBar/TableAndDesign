export default (state = 5, action) => {
  switch (action.type) {
    case 'CHANGE_PAG_RANGE':
      return action.payload;
    default:
      return state;
  }
};
