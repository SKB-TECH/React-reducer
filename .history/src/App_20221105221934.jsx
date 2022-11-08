import React from 'react';
import Phone from './components/Phone';
import { Provider } from 'react-redux';
import { StoreCreator } from 'redux';
const App = () => {
  return (
    <div className='section-one'>
      <Phone />
    </div>
  );
};

export default App;