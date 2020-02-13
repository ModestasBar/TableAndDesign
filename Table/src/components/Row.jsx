import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = ({ row }) => (
  <div tabIndex="-1" role="button" className="table-row">
    <Cell body={row.userId} />
    <Cell body={row.title} />
    <Cell body={row.completed.toString()} />
  </div>
);

Row.propTypes = {
  row: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(Row);
