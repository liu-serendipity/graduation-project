import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FONTSIZE, ICONS } from '../../../../const';
import { NavLink } from 'react-router-dom';

export const Recommend = ({ recommendList = [] }: any) => {
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
      {recommendList.map((item: any) => {
        return (
          <NavLink
            key={item.pic}
            to={{
              pathname: '/goodsDetail',
              search: `goods_id=${item.goods_id}`,
            }}
          >
            <Box mt='0.08rem'>
              <Image src={item.pic} w='100%' />
            </Box>
          </NavLink>
        );
      })}
    </Box>
  );
};
