import { combineReducers } from 'redux';
import dataSort from './dataSort';
import sortValue from './sortValue';
import paginationSort from './paginationSort';
import paginationPage from './paginatePage';
import rowClick from './row';
import paginationRange from './paginationRange';

const allReducers = combineReducers({
  data: dataSort,
  sort: sortValue,
  pagination: paginationSort,
  paginationPage,
  isClicked: rowClick,
  paginationRange,
});

export default allReducers;
