import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../views/Login';
const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));
const Cart = lazy(() => import('../views/Cart'));
const Mall = lazy(() => import('../views/Mall'));

const Card = lazy(() => import('../pages/Card'));
const Order = lazy(() => import('../pages/Order'));
const Service = lazy(() => import('../pages/Service'));
const Search = lazy(() => import('../pages/Search'));
const Favorite = lazy(() => import('../pages/Favorite'));
const Setting = lazy(() => import('../pages/Setting'));
const ToPay = lazy(() => import('../pages/ToPay'));
const ToReceive = lazy(() => import('../pages/ToReceive'));
const ToComment = lazy(() => import('../pages/ToComment'));
const Register = lazy(() => import('../pages/Register'));
const FindAccount = lazy(() => import('../pages/FindAccount'));
const Applications = lazy(() => import('../pages/Applications'));
const FeedBack = lazy(() => import('../pages/FeedBack'));
const GiftCard = lazy(() => import('../pages/GiftCard'));
const PickCoupons = lazy(() => import('../pages/PickCoupons'));
const VipStorage = lazy(() => import('../pages/VipStorage'));
const Sign = lazy(() => import('../pages/Sign'));
const PrivacyAgreement = lazy(() => import('../pages/PrivacyAgreement'));
const Activities = lazy(() => import('../pages/Activities'));
const Community = lazy(() => import('../pages/Community'));

export const BasicRoute = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />}></Route>
        <Route path='/login' element={<Login />}></Route>
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
        <Route path='/register' element={<Register />}></Route>
        <Route path='/findAccount' element={<FindAccount />}></Route>
        <Route path='/applications' element={<Applications />}></Route>
        <Route path='/feedback' element={<FeedBack />}></Route>
        <Route path='/giftCard' element={<GiftCard />}></Route>
        <Route path='/pickCoupons' element={<PickCoupons />}></Route>
        <Route path='/vipStorage' element={<VipStorage />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/privacyAgreement' element={<PrivacyAgreement />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='/community' element={<Community />}></Route>
      </Routes>
    </Suspense>
  );
};
