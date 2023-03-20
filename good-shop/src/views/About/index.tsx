import React from 'react';
import { Box, Image, Avatar, Flex, Text, AspectRatio } from '@chakra-ui/react';
import { Bar } from './components';
import head from './assets/head.jpg';
import { FONTSIZE } from '../../const';

import user_head from './assets/user_head.jpeg';

const data = {
  headImage: user_head,
  userName: '与你是一首歌',
};

const About = () => {
  return (
    <Box>
      <Bar />
      <Box w='100%' h='100vh' bgColor={'gray.100'}>
        <AspectRatio ratio={1920 / 1080} w='100%'>
          <Box bgImage={head} bgSize={'contain'} bgRepeat={'no-repeat'} w='100%' h='100%'>
            <Flex w='3.4rem' justify={'space-between'} align={'center'}>
              <Box pos={'relative'}>
                <Box w='0.68rem' h='0.68rem'>
                  <Avatar size={'ssm'} bgColor={'gray.300'} src={data.headImage || ''} />
                </Box>
                <Flex
                  pos={'absolute'}
                  bottom={0}
                  left={'0.4rem'}
                  w='1.2rem'
                  h='0.36rem'
                  backdropFilter={'blur(8px)'}
                  borderRadius={'1.2rem'}
                  justify={'center'}
                  align={'center'}
                >
                  <Text fontSize={FONTSIZE.small} color={'#fff'}>
                    {data.userName}
                  </Text>
                </Flex>
              </Box>
              <Flex
                justify={'center'}
                align={'center'}
                backdropFilter={'blur(8px)'}
                w='0.54rem'
                h='0.54rem'
                borderRadius={'0.12rem'}
              >
                <Text fontSize={FONTSIZE.big} color={'#fff'}>
                  QR
                </Text>
              </Flex>
            </Flex>
          </Box>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default About;
