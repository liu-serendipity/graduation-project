import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import empty from './empty.png';
import { FONTSIZE } from '../../../../const';

export const Empty = () => {
  const navigate = useNavigate();

  const handleJump = () => {
    navigate('/mall');
  };

  return (
    <Flex w='100%' h='100%' align={'center'} justify={'center'} flexDir={'column'}>
      <Box w='1.4rem'>
        <Image src={empty} w='100%' />
      </Box>
      <Flex
        mt='0.4rem'
        align={'center'}
        justify={'center'}
        bgColor={'pink.200'}
        w='1rem'
        h='0.38rem'
        borderRadius={'0.16rem'}
        onClick={() => handleJump()}
      >
        <Text fontSize={FONTSIZE.big} color={'#fff'}>
          再去看看
        </Text>
      </Flex>
    </Flex>
  );
};
