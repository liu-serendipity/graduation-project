import React from 'react';
import { Box } from '@chakra-ui/react';
import { Bar, Info } from './components';

const About = () => {
  return (
    <Box>
      <Bar />
      <Box w='100%' h='100vh' bgColor={'gray.100'}>
        <Info />
      </Box>
    </Box>
  );
};

export default About;
