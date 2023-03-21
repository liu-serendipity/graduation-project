import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, SettingsIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FONTSIZE } from '../../../../const';

export const Bar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const jumpToMyLikes = () => {
    // navigate('/setting');
    console.log('-----jumpToMyLikes-----缺少路由--------');
  };

  return (
    <Flex
      position={'fixed'}
      backdropFilter={'blur(6px)'}
      background={'rgba(255, 255, 255, .2)'}
      w='100%'
      fontSize={FONTSIZE.big}
      align={'center'}
      h='0.4rem'
      justify={'space-between'}
      borderBottomRadius={'0.14rem'}
      color={'#fff'}
      zIndex={99}
    >
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => handleBack()}>
        <ChevronLeftIcon />
      </Flex>
      <Text>我的</Text>
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => jumpToMyLikes()}>
        <SettingsIcon />
      </Flex>
    </Flex>
  );
};
