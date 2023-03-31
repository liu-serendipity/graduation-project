import React, { useState } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { FONTSIZE } from '../../const';
import { NavLink } from 'react-router-dom';

import vip from './vip.png';

export const GoodsCard = (item: any) => {
  return (
    <NavLink
      to={{
        pathname: '/goodsDetail',
        search: `goods_id=${item.item.goods_id}`,
      }}
    >
      <Box w='1.75rem' m='0.02rem' bgColor={'#fff'} borderRadius={'0.06rem'}>
        <Image src={item.item.pic} w='100%' />
        <Box p='0.04rem' mt='0.04rem'>
          <Box fontSize={FONTSIZE.small} noOfLines={[2]}>
            <Box bgColor={'red'} px='0.02rem' float={'left'} borderRadius={'0.06rem'} mr='0.02rem'>
              <Text fontSize={FONTSIZE.ssmall} color={'#fff'}>
                {item.item.isHot ? '热销' : ''}
              </Text>
            </Box>
            {item.item.desc}
          </Box>
          <Box my='0.02rem'>
            {item.item.ranking ? (
              <Box bgColor={'#feeae8'} borderRadius={'0.04rem'} w='fit-content' p='0.01rem 0.04rem'>
                <Text fontSize={FONTSIZE.ssmall} color={'#fa3c2a'} noOfLines={[1]}>
                  {item.item.ranking}
                </Text>
              </Box>
            ) : (
              <Box py='0.1rem'></Box>
            )}
          </Box>
          <Flex align={'center'} py='0.02rem'>
            <Box>
              <Text fontSize={FONTSIZE.small} color={'red.500'} fontWeight={'bold'}>
                {item.item.price_unity}
                {(item.item.normal_price / 100).toFixed(2)}
              </Text>
            </Box>
            {item.item.vip_price && (
              <Flex ml='0.06rem' align={'center'}>
                <Text fontSize={FONTSIZE.ssmall} color={'#424242'} fontWeight={'bold'}>
                  {item.item.price_unity}
                  {(item.item.vip_price / 100).toFixed(2)}
                </Text>
                <Box w='0.36rem'>
                  <Image src={vip} w='100%' />
                </Box>
              </Flex>
            )}
          </Flex>
          <Flex align={'center'} color={'#848689'}>
            <Text fontSize={FONTSIZE.ssmall} mr='0.1rem'>
              {item.item.comment}
              {item.item.comment_unity}+条评论
            </Text>
            <Text fontSize={FONTSIZE.ssmall}>好评{item.item.good_comment_percent}</Text>
          </Flex>
        </Box>
      </Box>
    </NavLink>
  );
};
