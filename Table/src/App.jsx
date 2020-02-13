/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Table from './components/Table';
import rootReducer from './reducers';
import TableOption from './components/TableOption';


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const App = () => (
  <div className="main">
    <Provider store={store}>
      <Table />
      <TableOption />
    </Provider>
  </div>
);


export default App;
