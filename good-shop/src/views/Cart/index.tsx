import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Bar, Empty, Full } from './components';

const data = [];

const Cart = () => {
  return (
    <Box>
      <Bar />
      <Box w='100%' h='100vh' bgColor={'gray.100'}>
        {data.length > 0 ? <Full /> : <Empty />}
      </Box>
    </Box>
  );
};

export default Cart;
