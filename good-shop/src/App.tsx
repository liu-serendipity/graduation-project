import React from 'react';
import { BasicRoute } from './routes';
import { useUserContext } from './hooks/useUserContext';
import './App.css';

function App() {
  // const { ready } = useUserContext();
  // return ready && <BasicRoute />;
  return <BasicRoute />;
}

export default App;
