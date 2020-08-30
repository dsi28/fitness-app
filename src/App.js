import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/configureStore';
import Main from './components/MainComponent';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;