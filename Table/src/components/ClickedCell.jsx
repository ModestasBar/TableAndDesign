import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const ClickedCell = () => {
  const body = useSelector((state) => state.isClicked);

  return body ? <div className="clicked-cell">{body}</div> : null;
};

export default memo(ClickedCell);
