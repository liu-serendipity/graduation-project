import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FONTSIZE, FOOTERTABS } from '../../const';

interface StyleBoxProps {
  children: string;
  link: string;
  Icon: any;
}

const StyleBox = ({ children, link, Icon }: StyleBoxProps) => {
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <Flex flexDir={'column'} alignItems={'center'} w='0.9rem' p={'0.05rem 0 0.06rem 0'}>
          <Icon w='0.25rem' h='0.25rem' fill={isActive ? 'red' : ''} />
          <Box mt='0.01rem'>
            <Text fontSize={FONTSIZE.small} color={isActive ? 'red' : ''}>
              {children}
            </Text>
          </Box>
        </Flex>
      )}
    </NavLink>
  );
};

export const Footer = () => {
  return (
    <Box w={'100%'} pos={'fixed'} bottom={0} borderTop={'1px solid rgba(0, 0, 0, 0.2)'}>
      <Flex justify={'space-around'}>
        {FOOTERTABS.map((item) => {
          return (
            <StyleBox key={item.title} link={item.link} Icon={item.Icon}>
              {item.title}
            </StyleBox>
          );
        })}
      </Flex>
    </Box>
  );
};
