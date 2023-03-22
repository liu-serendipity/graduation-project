import React from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  InputLeftElement,
} from '@chakra-ui/react';
import { FONTSIZE } from '../../const';
import signed_logo from './assets/signed_logo.png';
import { Bar } from '../../components/Bar';
import footer from './assets/footer.gif';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const jumpToRegister = () => {
    navigate('/register');
  };

  return (
    <Box w='100%' h='100vh' bgColor={'red.500'} pos={'fixed'}>
      <Bar title='良品铺子' fontColor='#fff' />
      <Flex mt='1.6rem' flexDir={'column'} align={'center'}>
        <Image src={signed_logo} w='1.2rem' />
        <Stack mt='0.42rem' spacing={1} zIndex={1}>
          <Box w='2.4rem' borderRadius={'0.12rem'}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                h='0.36rem'
                children='账号'
                fontSize={FONTSIZE.medium}
                m='0'
                w='0.4rem'
                color={'#fff'}
              />
              <Input focusBorderColor='#d81e06' h='0.36rem' p='0' px='0.16rem' fontSize={FONTSIZE.medium} />
            </InputGroup>
          </Box>
          <Box w='2.4rem' borderRadius={'0.12rem'}>
            <InputGroup>
              <InputLeftAddon
                pointerEvents='none'
                h='0.36rem'
                children='密码'
                fontSize={FONTSIZE.medium}
                p='0.06rem'
                pl='0.12rem'
              />
              <Input h='0.36rem' p='0' px='0.16rem' fontSize={FONTSIZE.medium} />
            </InputGroup>
          </Box>
        </Stack>
        <Button h='0.36rem' colorScheme='gray' p='0' minW='0' w='0.8rem' mt='0.2rem'>
          <Text fontSize={FONTSIZE.small} color={'blue.500'}>
            登 陆
          </Text>
        </Button>
        <Box fontSize={FONTSIZE.small} zIndex={1} p='0.14rem' onClick={() => jumpToRegister()}>
          <Text color={'#424242'} as='span'>
            没有账号？
          </Text>
          <Text color={'blue.600'} as='span'>
            立即注册
          </Text>
        </Box>
        <Box pos={'absolute'} bottom={0} zIndex={0}>
          <Image src={footer} w='100%' />
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
