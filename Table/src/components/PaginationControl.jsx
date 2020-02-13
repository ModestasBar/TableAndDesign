import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginate, paginateOff } from '../actions';

const PaginationControl = () => {
  const dispatch = useDispatch();
  const { data, pagination, paginationRange } = useSelector((state) => state);

  return (
    <input
      type="button"
      value="Switch pagination"
      onClick={() => {
        if (pagination) { dispatch(paginateOff()); } else {
          dispatch(paginate({ data, value: 1, paginate: paginationRange }));
        }
      }}
      className="control-pagination"
    />
  );
};

export default memo(PaginationControl);
