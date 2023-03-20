import React from 'react';
import { Box, Avatar, Flex, Text, AspectRatio } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { FONTSIZE } from '../../../../const';
import head from '../../assets/head.jpg';
import user_head from '../../assets/user_head.jpeg';

const data = {
  headImage: user_head,
  userName: '与你是一首歌',
  discount_total: 520,
};

const arrowRightIconStyle = {
  opacity8: {
    opacity: 0.8,
    fontSize: '0.1rem',
    mr: '0.02rem',
  },
  opacity6: {
    opacity: 0.4,
    fontSize: '0.1rem',
    mr: '0.02rem',
  },
  opacity4: {
    opacity: 0.4,
    fontSize: '0.1rem',
    mr: '',
  },
};

export const Info = () => {
  return (
    <AspectRatio ratio={1920 / 1080} w='100%'>
      <Box bgImage={head} bgSize={'contain'} bgRepeat={'no-repeat'} w='100%' h='100%'>
        <Flex w='3.36rem' justify={'space-between'} align={'center'}>
          <Box pos={'relative'}>
            <Box w='0.68rem' h='0.68rem'>
              <Avatar size={'ssm'} bgColor={'gray.300'} src={data.headImage} />
            </Box>
            <Flex
              pos={'absolute'}
              bottom={0}
              left={'0.4rem'}
              w='1.2rem'
              h='0.36rem'
              backdropFilter={'blur(8px)'}
              borderRadius={'1.2rem'}
              justify={'center'}
              align={'center'}
            >
              <Text fontSize={FONTSIZE.medium} color={'#fff'}>
                {data.userName}
              </Text>
            </Flex>
          </Box>
          <Flex
            justify={'center'}
            align={'center'}
            backdropFilter={'blur(8px)'}
            w='0.54rem'
            h='0.54rem'
            borderRadius={'0.12rem'}
          >
            <Text fontSize={FONTSIZE.big} color={'#fff'}>
              QR
            </Text>
          </Flex>
        </Flex>
        <Flex
          pos={'absolute'}
          w='3.6rem'
          bottom='0'
          bgColor={'yellow.700'}
          fontSize={FONTSIZE.small}
          color={'#fff'}
          justify={'space-between'}
          align={'center'}
          borderTopRadius={'0.12rem'}
          px='0.2rem'
          py='0.04rem'
        >
          <Flex align={'center'}>
            <Text mr='0.04rem'>会员特权卡</Text>
            <ArrowRightIcon {...arrowRightIconStyle.opacity8} />
            <ArrowRightIcon {...arrowRightIconStyle.opacity6} />
            <ArrowRightIcon {...arrowRightIconStyle.opacity4} />
          </Flex>
          <Text textAlign={'right'}>为您节省了{data.discount_total}元</Text>
        </Flex>
      </Box>
    </AspectRatio>
  );
};
