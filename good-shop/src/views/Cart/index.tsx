import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';
import { Empty, Full } from './components';
import { Bar } from '../../components/Bar';

const data = [];

const Cart = () => {
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
        {data.length > 0 ? <Full /> : <Empty />}
      </Box>
    </Box>
  );
};

export default Cart;
