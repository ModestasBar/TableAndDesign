import React from 'react';
import { useSelector } from 'react-redux';
import PaginationControl from './PaginationControl';
import ClickedCell from './ClickedCell';

const TableOption = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="table-option">
      <h1>{`Table with ${data.length} rows`}</h1>
      <PaginationControl />
      <ClickedCell />
    </div>
  );
};

export default TableOption;
