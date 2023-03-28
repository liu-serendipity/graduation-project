import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FONTSIZE } from '../../../../const';

import { GoodsCard } from '../../../../components';

interface RecommendProps {
  data: any[];
}

export const Recommend: React.FC<RecommendProps> = ({ data = [] }) => {
  return (
    <Flex flexDir={'column'} align={'center'}>
      <Box bgColor={'#fff'} w='3.6rem' borderRadius={'0.12rem'} p='0.04rem 0.1rem' textAlign={'center'}>
        <Text fontSize={FONTSIZE.medium} color={'blue.700'}>
          🌟🌟🌟 商品列表 🌟🌟🌟
        </Text>
      </Box>
      {data.length > 0 && (
        <Flex w='3.6rem' mt='0.04rem' flexWrap={'wrap'} justify='space-between'>
          {data.map((item) => {
            return <GoodsCard item={item} key={item.desc} />;
          })}
        </Flex>
      )}
    </Flex>
  );
};
