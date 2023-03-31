import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';
import { Empty, Full } from './components';
import { Bar } from '../../components';
import { useCartContext } from '../../hooks/useCartContext';

const Cart = () => {
  const { cartList } = useCartContext();
  return (
    <Box>
      <Bar
        LeftIcon={ChevronLeftIcon}
        RightIcon={StarIcon}
        leftLink={-1}
        rightLink={'/favorite'}
        title={'购物车'}
        fontColor={'#424242'}
        rightIconColor={'#d81e06'}
      />
      <Box w='100%' h='100vh' bgColor={'gray.100'}>
        {cartList.length > 0 ? <Full cartList={cartList} /> : <Empty />}
      </Box>
    </Box>
  );
};

export default Cart;
