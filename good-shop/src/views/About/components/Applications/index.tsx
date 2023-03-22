import React from 'react';
import { Box, Avatar, Flex, Text, AspectRatio } from '@chakra-ui/react';
import { ICONS } from '../../../../const';
import { FONTSIZE } from '../../../../const';
import { NavLink } from 'react-router-dom';

const data = [
  {
    fixed: '签到有礼',
    Icon: ICONS.IconSign,
    link: '/sign',
  },
  {
    fixed: '会员权益',
    Icon: ICONS.IconMemberBenfits,
    link: '/card',
  },
  {
    fixed: '我的收藏',
    Icon: ICONS.IconLike,
    link: '/favorite',
  },
  {
    fixed: '领券中心',
    Icon: ICONS.IconPickCoupons,
    link: '/pickCoupons',
  },
  {
    fixed: '会员储值',
    Icon: ICONS.IconVipStorage,
    link: '/vipStorage',
  },
  {
    fixed: '礼品卡片',
    Icon: ICONS.IconGiftCard,
    link: '/giftCard',
  },
  {
    fixed: '意见反馈',
    Icon: ICONS.IconFeedback,
    link: '/feedback',
  },
  {
    fixed: '全部应用',
    Icon: ICONS.IconApplications,
    link: '/applications',
  },
];

interface StyleBoxProps {
  Icon: any;
  fixed: string;
  link: string;
  p?: string;
  pb?: string;
  pt?: string;
}

const StyleBox = ({ Icon, fixed, link, p, pb, pt }: StyleBoxProps) => {
  return (
    <NavLink to={link}>
      <Flex flexDir={'column'} align={'center'} w='100%' p={p} pb={pb} pt={pt}>
        <Icon w='0.28rem' h='0.28rem' />
        <Text fontSize={FONTSIZE.small}>{fixed}</Text>
      </Flex>
    </NavLink>
  );
};

export const Applications = () => {
  return (
    <Flex w='94%' bgColor={'#fff'} m='auto' borderRadius={'0.12rem'} flexWrap={'wrap'} justify={'space-between'}>
      {data.map((item, index) => {
        return (
          <StyleBox
            key={item.fixed}
            Icon={item.Icon}
            fixed={item.fixed}
            link={item.link}
            p={'0.12rem 0.16rem'}
            pb={index <= 3 ? '0.06rem' : '0.12rem'}
            pt={index <= 3 ? '0.12rem' : '0.06rem'}
          />
        );
      })}
    </Flex>
  );
};
