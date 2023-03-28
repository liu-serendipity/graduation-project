import React, { useState } from 'react';
import { Box, Flex, Center, Text, Image } from '@chakra-ui/react';
import { ICONS, FONTSIZE } from '../../const';
import { useNavigate } from 'react-router-dom';
import { BannerSwiper, Recommend } from './components';

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

  const baseConfig3 = [
    {
      Component: ICONS.IconFlashSale,
      title: '秒 · 杀',
      link: '/mall',
    },
    {
      Component: ICONS.IconNew,
      title: '新品首发',
      link: '/mall',
    },
    {
      Component: ICONS.IconVipStorage,
      title: '会员储值',
      link: '/vipStorage',
    },
    {
      Component: ICONS.IconHot,
      title: '他们都在买',
      link: '/mall',
    },
    {
      Component: ICONS.IconActivities,
      title: '更多活动',
      link: '/activities',
    },
    {
      Component: ICONS.IconCommunity,
      title: '良品圈子',
      link: '/community',
    },
  ];

  return (
    <Box w='100%' bgColor={'gray.100'} pb='0.58rem'>
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
      <Box bgColor={'#fff'} px='0.075rem' pt='0.46rem' pb='0.04rem' borderBottomRadius={'0.12rem'}>
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
        <Box pt='0.04rem'>
          <BannerSwiper bannerList={bannerList} />
        </Box>
      </Box>
      <Flex
        m='auto'
        mt='0.1rem'
        flexWrap={'wrap'}
        w='3.6rem'
        justify={'space-around'}
        bgColor={'#fff'}
        borderRadius={'0.12rem'}
      >
        {baseConfig3.map((item) => {
          return (
            <Flex
              key={item.title}
              onClick={() => jumpToWhere(item.link)}
              flexDir={'column'}
              align={'center'}
              w='1.2rem'
              p='0.1rem'
            >
              <item.Component w='0.28rem' h='0.28rem' />
              <Text fontSize={FONTSIZE.small} color={'#424242'}>
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Recommend />
    </Box>
  );
};

export default Home;
