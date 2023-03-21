import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Outlet, useLocation, NavLink, useNavigate } from 'react-router-dom';
import { FONTSIZE } from '../../const';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/order') {
      navigate('toPay');
    }
  }, []);

  const orderNavs = [
    { id: 1, desc: '待支付', path: '/toPay' },
    { id: 2, desc: '待收货', path: '/toReceive' },
    { id: 3, desc: '待评价', path: '/toComment' },
  ];

  return (
    <Box>
      {orderNavs.map((item) => {
        return (
          <NavLink key={item.desc} to={`/order/${item.path}`}>
            <Box>
              <Text fontSize={FONTSIZE.medium}>{item.desc}</Text>
            </Box>
          </NavLink>
        );
      })}
      <Outlet />
    </Box>
  );
};

export default Order;
