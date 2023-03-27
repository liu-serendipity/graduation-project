import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FONTSIZE, ICONS } from '../../../../const';

import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';

const data = [p1, p2];

export const Recommend = () => {
  return (
    <Box w='3.6rem' m='auto' mt='0.1rem'>
      <Flex bgColor={'#fff'} borderRadius={'0.12rem'} p='0.08rem 0.2rem' justify={'space-between'} align={'center'}>
        <Box>
          <Text fontSize={FONTSIZE.ssmall} color={'#424242'}>
            BESTORE
          </Text>
          <Text fontSize={FONTSIZE.bbig} color={'blue.700'} fontWeight={'bold'}>
            今日 · 推荐
          </Text>
          <Text fontSize={FONTSIZE.small} color={'blue.600'} fontWeight={'bold'}>
            社群福利专享
          </Text>
        </Box>
        <ICONS.IconPistachio w='0.6rem' h='0.6rem' />
      </Flex>
      {data.map((item, index) => {
        return (
          <Box key={item} mt='0.08rem'>
            <Image src={item} w='100%' />
          </Box>
        );
      })}
    </Box>
  );
};
