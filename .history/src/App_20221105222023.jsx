import React from 'react';
import Phone from './components/Phone';
import { Provider } from 'react-redux';
i
const App = () => {
  return (
    <Provider>
      <div className='section-one'>
      <Phone />
     </div>
    </Provider>
  );
};

export default App;