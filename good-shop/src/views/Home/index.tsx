import React, { useState } from 'react';
import { Box, Flex, Center, Text, Image } from '@chakra-ui/react';
import { ICONS } from '../../const';
import { useNavigate } from 'react-router-dom';
import { BannerSwiper } from './components';
import { FONTSIZE } from '../../const';
import logo from '../../assets/img/logo.png';

import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';

const bannerList = [
  {
    pic: p1,
    link: '/mall',
  },
  {
    pic: p2,
    link: '/mall',
  },
];

const vipInfo = {
  integral: 520,
  isSign: false,
};

const Home = () => {
  const navigate = useNavigate();

  const jumpToWhere = (target?: string) => {
    target
      ? navigate(target)
      : () => {
          return null;
        };
  };

  const baseConfig1 = [
    {
      Component: ICONS.IconHeadNoSign,
      Component_done: ICONS.IconHeadSign,
      link: '/sign',
      fixed: '签到',
    },
    {
      Component: ICONS.IconCustomerService,
      link: '/service',
      fixed: '客服',
    },
  ];

  const baseConfig2 = [
    {
      Component: ICONS.IconPickCoupons,
      title: '领券中心',
      link: '/pickCoupons',
      mr: '0.08rem',
    },
    {
      Component: ICONS.IconCardCenter,
      title: '我的卡券',
      link: '/giftCard',
    },
  ];

  return (
    <Box w='100%' bgColor={'gray.100'} h='100vh'>
      <Flex
        bgColor={'rgb(216, 30, 6)'}
        px='0.12rem'
        justify={'space-between'}
        align={'center'}
        pos='fixed'
        zIndex={9}
        w='100%'
        borderBottom={'1px solid rgba(0,0,0,0.1)'}
      >
        <Box w='0.8rem' onClick={() => jumpToWhere('/home')}>
          <Image src={logo} w='100%' />
        </Box>
        <Flex>
          {baseConfig1.map((item) => {
            return (
              <Center key={item.link} w='0.4rem' h='0.4rem' onClick={() => jumpToWhere(item.link)}>
                {item.fixed === '签到' ? (
                  vipInfo.isSign ? (
                    item.Component_done && <item.Component_done w='0.24rem' h='0.24rem' />
                  ) : (
                    <item.Component w='0.24rem' h='0.24rem' />
                  )
                ) : (
                  <item.Component w='0.24rem' h='0.24rem' fill='#fff' />
                )}
              </Center>
            );
          })}
        </Flex>
      </Flex>
      <Box bgColor={'#fff'} px='0.075rem' pt='0.6rem' pb='0.1rem'>
        <Flex justify={'space-between'} align={'center'} pl='0.12rem' pr='0.12rem'>
          <Box>
            <Flex align={'center'}>
              <ICONS.IconCoin w='0.16rem' h='0.16rem' />
              <Text fontSize={FONTSIZE.small} color={'#424242'} ml='0.04rem'>
                我的积分
              </Text>
            </Flex>
            <Box p='0.02rem 0.08rem'>
              <Text fontSize={FONTSIZE.big}>{vipInfo.integral}</Text>
            </Box>
          </Box>
          <Flex align={'center'}>
            {baseConfig2.map((item) => {
              return (
                <Flex
                  key={item.title}
                  w='0.6rem'
                  h='0.6rem'
                  justify={'center'}
                  align={'center'}
                  flexDir={'column'}
                  mr={item.mr ? item.mr : ''}
                  onClick={() => jumpToWhere(item.link)}
                >
                  <item.Component w='0.28rem' h='0.28rem' />
                  <Text fontSize={FONTSIZE.ssmall} color={'#424242'} mt='0.02rem'>
                    {item.title}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Box pt='0.1rem'>
          <BannerSwiper bannerList={bannerList} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
