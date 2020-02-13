import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { click, noSort } from '../actions';

const Cell = ({ body }) => {
  const dispatch = useDispatch();

  return (
    <div
      role="listitem"
      className="cell"
      onClick={(e) => {
        dispatch(noSort(false));
        dispatch(click(e.currentTarget.textContent));
      }}
    >
      {body}
    </div>
  );
};

Cell.propTypes = {
  body: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
};

export default memo(Cell);
