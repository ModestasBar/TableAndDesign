/* eslint-disable import/prefer-default-export */
export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const sortColumn = (text) => ({
  type: text,
});

export const sortTable = () => ({
  type: 'SORT',
});

export const noSort = () => ({
  type: 'NO_SORT',
});

export const paginate = (obj) => ({
  type: 'INITIATE',
  payload: obj,
});

export const paginateOff = () => ({
  type: 'NO_PAGINATION',
});

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const click = (content) => ({
  type: 'CLICK',
  payload: content,
});

export const paginationRange = (range) => ({
  type: 'CHANGE_PAG_RANGE',
  payload: range,
});
