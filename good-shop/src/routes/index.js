import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));

const basename = window.location.pathname.split('/v/')[0] + '/v/';

export const BasicRoute = () => {
  return (
    <BrowserRouter basename={basename}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
