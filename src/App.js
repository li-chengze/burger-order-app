import React from 'react';
import './App.css';

import Layout from "./components/Layout/Layout"
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducer';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
