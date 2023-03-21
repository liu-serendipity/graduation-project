import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));
const Cart = lazy(() => import('../views/Cart'));
const Mall = lazy(() => import('../views/Mall'));
const Card = lazy(() => import('../views/Card'));
const Order = lazy(() => import('../views/Order'));
const Service = lazy(() => import('../views/Service'));
const Search = lazy(() => import('../views/Search'));
const Favorite = lazy(() => import('../views/Favorite'));
const Setting = lazy(() => import('../views/Setting'));

const ToPay = lazy(() => import('../pages/ToPay'));
const ToReceive = lazy(() => import('../pages/ToReceive'));
const ToComment = lazy(() => import('../pages/ToComment'));

export const BasicRoute = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/mall' element={<Mall />}></Route>
        <Route path='/card' element={<Card />}></Route>
        <Route path='/order' element={<Order />}>
          <Route path='toPay' element={<ToPay />}></Route>
          <Route path='toReceive' element={<ToReceive />}></Route>
          <Route path='toComment' element={<ToComment />}></Route>
        </Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
        <Route path='/setting' element={<Setting />}></Route>
      </Routes>
    </Suspense>
  );
};
