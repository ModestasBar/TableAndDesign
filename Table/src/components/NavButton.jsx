import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const NavButton = ({ navigate, value }) => {
  const dispatch = useDispatch();
  return (<input type="button" value={value} onClick={() => dispatch(navigate())} className="pag-button" />);
};

NavButton.propTypes = {
  value: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default memo(NavButton);
