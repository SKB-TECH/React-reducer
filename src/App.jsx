import React from 'react';
import Phone from './components/Phone';
import CommentsContainer from './components/CommentsContainer'
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
      <div className="comments">
        <CommentsContainer />
      </div>
    </Provider>
  );
};

export default App;