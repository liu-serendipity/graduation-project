import React from 'react';
import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, SettingsIcon } from '@chakra-ui/icons';
import { Info, MyOrder, Applications } from './components';
import { Bar } from '../../components/Bar';

const About = () => {
  return (
    <Box>
      <Bar LeftIcon={ChevronLeftIcon} RightIcon={SettingsIcon} leftLink={-1} rightLink={'/setting'} title={'我的'} />
      <Box w='100%' h='100vh' bgColor={'gray.100'}>
        <Info />
        <MyOrder />
        <Applications />
      </Box>
    </Box>
  );
};

export default About;
