export default (state = false, action) => {
  switch (action.type) {
    case 'CLICK':
      return action.payload;
    default:
      return state;
  }
};
