export default (state = [], action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;
    case 'FIRST':
      return [...state].sort((a, b) => b.userId - a.userId);
    case 'SECOND':
      return [...state].sort((a, b) => b.title.localeCompare(a.title));
    case 'THIRD':
      return [...state].sort((a, b) => b.completed - a.completed);
    default:
      return state;
  }
};
