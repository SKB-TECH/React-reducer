import React from 'react';
import Phone from './components/Phone';
import { Provider } from 'react-redux';
import store from "../src/redux/store"
import Tv from './components/Tv';

const App = () => {
  return (
    <Provider store={store}>
      <div className='section-one'>
        <Tv />
        <Phone />
      </div>
    </Provider>
  );
};

export default App;