import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex>
      <Link to='/'>
        <Box>home</Box>
      </Link>
      <Link to='/mall'>
        <Box>mall</Box>
      </Link>
      <Link to='/cart'>
        <Box>cart</Box>
      </Link>
      <Link to='/about'>
        <Box>about</Box>
      </Link>
    </Flex>
  );
};
