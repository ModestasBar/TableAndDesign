import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { paginate } from '../actions';

const Button = ({ val = 1 }) => {
  const { data, paginationRange } = useSelector((state) => state);
  const dispath = useDispatch();

  return (
    <input
      type="button"
      value={val}
      className="pag-button"
      onClick={() => dispath(paginate({ data, value: val, paginate: paginationRange }))}
    />
  );
};

Button.propTypes = {
  val: PropTypes.number.isRequired,
};

export default memo(Button);
