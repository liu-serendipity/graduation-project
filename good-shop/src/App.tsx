import React from 'react';
import './App.css';

import { BasicRoute } from './routes';
import { useUserContext } from './hooks/useUserContext';
import { Footer, SuspendButton } from './components';
import { BrowserRouter } from 'react-router-dom';

const basename = window.location.pathname.split('/v/')[0] + '/v/';

function App() {
  // const { ready } = useUserContext();
  // return ready && <BasicRoute />;
  return (
    <BrowserRouter basename={basename}>
      <SuspendButton />
      <Footer />
      <BasicRoute />
    </BrowserRouter>
  );
}

export default App;
