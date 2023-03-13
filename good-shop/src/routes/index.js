import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));
const Cart = lazy(() => import('../views/Cart'));
const Mall = lazy(() => import('../views/Mall'));

export const BasicRoute = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/mall' element={<Mall />}></Route>
      </Routes>
    </Suspense>
  );
};
