import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ICONS } from '../../../../const';
import { FONTSIZE } from '../../../../const';
import { Link } from 'react-router-dom';

const { IconCustomerService, IconToComment, IconToPay, IconToReceive, IconMyOrder } = ICONS;

const tabs = [
  {
    tab: '待支付',
    Icon: IconToPay,
    link: '/order/toPay',
  },
  {
    tab: '待收货',
    Icon: IconToReceive,
    link: '/order/toReceive',
  },
  {
    tab: '待评价',
    Icon: IconToComment,
    link: '/order/toComment',
  },
  {
    tab: '联系客服',
    Icon: IconCustomerService,
    link: '/service',
  },
  {
    tab: '我的订单',
    Icon: IconMyOrder,
    link: '/order',
  },
];

interface StyleBoxProps {
  tab: string;
  Icon: any;
  needLine?: boolean;
  iconColor?: string;
  link: string;
}

const StyleBox = ({ tab, Icon, needLine = false, iconColor, link }: StyleBoxProps) => {
  return (
    <Link to={link}>
      <Flex flexDir={'column'} align={'center'} w='100%'>
        <Icon w='0.28rem' h='0.28rem' fill={iconColor} />
        <Text fontSize={FONTSIZE.small}>{tab}</Text>
      </Flex>
      {needLine && <Box borderLeft={'1px solid gray'} m='0.04rem 0.1rem'></Box>}
    </Link>
  );
};

export const MyOrder = () => {
  return (
    <Flex w='96%' bgColor={'#fff'} m='auto' my='0.12rem' borderRadius={'0.12rem'} p='0.08rem' justify={'space-around'}>
      {tabs.map((item, index) => {
        return (
          <StyleBox
            tab={item.tab}
            Icon={item.Icon}
            key={item.tab}
            needLine={index === tabs.length - 2}
            iconColor={index === tabs.length - 1 ? '#d81e06' : ''}
            link={item.link}
          />
        );
      })}
    </Flex>
  );
};
