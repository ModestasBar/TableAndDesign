import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Row from './Row';
import Pagination from './Pagination';
import { setData } from '../actions';

const Table = () => {
  let [initData, setInitData] = useState([]);
  const dispatch = useDispatch();
  const { data, sort, pagination } = useSelector((state) => state);
  const table = pagination || data;

  useEffect(() => {
    const handleData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((val) => {
          if (initData.length < 2000) {
            setInitData(initData = [...initData, ...val]);
            return handleData();
          }
          return dispatch(setData(initData));
        });
    };
    handleData();
  }, []);


  if (sort) {
    table.reverse();
  }

  return (
    <div className="table">
      <Header text="FIRST" />
      <Header text="SECOND" />
      <Header text="THIRD" />
      {table.map((row, i) => <Row row={row} key={i} />)}
      {pagination ? <Pagination /> : null}
    </div>
  );
};

export default memo(Table);
