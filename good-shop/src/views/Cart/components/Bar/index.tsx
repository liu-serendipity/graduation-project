import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FONTSIZE } from '../../../../const';

export const Bar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const jumpToMyLikes = () => {
    // navigate('/favorite');
    console.log('-----jumpToMyLikes-----缺少路由--------');
  };

  return (
    <Flex
      position={'fixed'}
      backdropFilter={'blur(6px)'}
      background={'rgba(255, 255, 255, .4)'}
      w='100%'
      fontSize={FONTSIZE.big}
      align={'center'}
      h='0.4rem'
      justify={'space-between'}
      borderRadius={'0.14rem'}
    >
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => handleBack()}>
        <ChevronLeftIcon />
      </Flex>
      <Text>购物车</Text>
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => jumpToMyLikes()}>
        <StarIcon />
      </Flex>
    </Flex>
  );
};
