import React from 'react';
import './App.css';

import { BasicRoute } from './routes';
import { Footer, SuspendButton, SuspendButton99 } from './components';
import { useLocation } from 'react-router-dom';
import { isPathPartlyExisted, isPathShowSuspendButton, isPathShowSuspendButton99 } from './untils';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const isShowFooter = isPathPartlyExisted(path);
  const isShowSuspendButton = isPathShowSuspendButton(path);
  const isShowSuspendButton99 = isPathShowSuspendButton99(path);

  return (
    <>
      {isShowSuspendButton && <SuspendButton />}
      {isShowFooter && <Footer />}
      {isShowSuspendButton99 && <SuspendButton99 />}
      <BasicRoute />
    </>
  );
}

export default App;
