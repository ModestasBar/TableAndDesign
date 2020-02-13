import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import NavButton from './NavButton';
import { increment, decrement } from '../actions';
import PagButton from './PagButton';

const Pagination = () => {
  const { paginationPage, data, paginationRange } = useSelector((state) => state);
  const totalPage = Math.ceil(data.length / paginationRange);

  return (
    <div className="pagination">
      {paginationPage > 0 ? <NavButton navigate={decrement} value="<--" /> : null}
      <PagButton val={paginationPage + 1} />
      <PagButton val={paginationPage + 2} />
      <PagButton val={paginationPage + 3} />
      <PagButton val={paginationPage + 4} />
      <PagButton val={paginationPage + 5} />
      {paginationPage < totalPage - 6 ? <NavButton navigate={increment} value="-->" /> : null}
    </div>
  );
};

export default memo(Pagination);
