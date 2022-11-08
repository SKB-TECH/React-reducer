import React from 'react';
import Phone from './components/Phone';
import { Provider } from 'react-redux';
import store from "../" 

const App = () => {
  return (
    <Provider store={}>
      <div className='section-one'>
      <Phone />
     </div>
    </Provider>
  );
};

export default App;