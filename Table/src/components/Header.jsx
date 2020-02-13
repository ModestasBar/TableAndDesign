import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTable, sortColumn } from '../actions';

const Header = ({ text }) => {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state);
  return (
    <div
      tabIndex="0"
      role="button"
      className="header"
      onClick={() => {
        dispatch(sortTable());
        if (pagination) { dispatch(sortColumn(`${text}_PAG`)); } else {
          dispatch(sortColumn(text));
        }
      }}
    >
      {text}
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Header);
