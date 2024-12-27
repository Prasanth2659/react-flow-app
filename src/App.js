import React from 'react';
import { Provider } from 'react-redux';
import DiagramFlow from './DiagramFlow';
import Sidebar from './Sidebar';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Sidebar />
      <DiagramFlow />
    </div>
  </Provider>
);

export default App;
