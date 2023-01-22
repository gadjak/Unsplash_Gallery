import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MyStack from './src/Navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
