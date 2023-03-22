import React from 'react';
import './App.css';

import { BasicRoute } from './routes';
import { Footer, SuspendButton } from './components';
import { useLocation } from 'react-router-dom';
import { isPathPartlyExisted, isPathShowSuspendButton } from './untils';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const isShowFooter = isPathPartlyExisted(path);
  const isShowSuspendButton = isPathShowSuspendButton(path);

  return (
    <>
      {isShowSuspendButton && <SuspendButton />}
      {isShowFooter && <Footer />}
      <BasicRoute />
    </>
  );
}

export default App;
