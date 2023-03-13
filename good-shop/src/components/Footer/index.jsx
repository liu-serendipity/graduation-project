import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <Link to='/home'>home</Link>
      <Link to='/about'>about</Link>
    </div>
  );
};
