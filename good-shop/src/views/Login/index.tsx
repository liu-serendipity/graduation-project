import React, { useState, useRef, useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../const';
import signed_logo from './assets/signed_logo.png';
import { Bar } from '../../components/Bar';
import footer from './assets/footer.gif';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const passwordRef: any = useRef(null);
  const accountRef: any = useRef(null);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordButton, setIsShowPasswordButton] = useState(false);

  const jumpToRegister = () => {
    navigate('/register');
  };

  const jumpToFindAccount = () => {
    navigate('/findAccount');
  };

  const handleAccountChange = (e: any) => {
    setAccount(e.target.value.trim());
    accountRef.current.value = e.target.value.trim();
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value.trim());
    passwordRef.current.value = e.target.value.trim();
  };

  const handleSubmit = () => {
    let _params = {};
    if (account && password) {
      _params = { account: account, password: password };
      console.log('_params', _params);
      navigate('/home');
    } else if (!account) {
      console.log('账号不能为空！');
    } else if (!password) {
      console.log('密码不能为空！');
    }
  };

  useEffect(() => {
    setIsShowPasswordButton(password ? true : false);
  }, [password]);

  return (
    <Box w='100%' h='100vh' bgColor={'red.500'} pos={'fixed'}>
      <Bar title='良品铺子' fontColor='#fff' />
      <Flex mt='1.6rem' flexDir={'column'} align={'center'}>
        <Image src={signed_logo} w='1.2rem' />
        <Box
          fontSize={FONTSIZE.small}
          zIndex={1}
          p='0.06rem 0.06rem 0 0.06rem'
          onClick={() => jumpToRegister()}
          mt='0.32rem'
        >
          <Text color={'#424242'} as='span'>
            没有账号？
          </Text>
          <Text color={'blue.600'} as='span'>
            立即注册
          </Text>
        </Box>
        <Stack spacing={1} zIndex={1}>
          <InputGroup w='2.4rem'>
            <InputLeftElement
              pointerEvents='none'
              h='0.36rem'
              children={
                <Box>
                  <Text fontSize={FONTSIZE.medium} textAlign={'center'}>
                    账号：
                  </Text>
                </Box>
              }
              w='0.6rem'
              m='0'
              ml='0.1rem'
              color={'#fff'}
            />
            <Input
              focusBorderColor='#fff'
              h='0.36rem'
              fontSize={FONTSIZE.small}
              p='0'
              pl='0.6rem'
              pr='0.4rem'
              color={'#fff'}
              ref={accountRef}
              onChange={handleAccountChange}
            />
          </InputGroup>
          <InputGroup w='2.4rem'>
            <InputLeftElement
              pointerEvents='none'
              h='0.36rem'
              children={
                <Box>
                  <Text fontSize={FONTSIZE.medium} textAlign={'center'}>
                    密码：
                  </Text>
                </Box>
              }
              w='0.6rem'
              m='0'
              ml='0.1rem'
              color={'#fff'}
            />
            <Input
              focusBorderColor='#fff'
              h='0.36rem'
              fontSize={FONTSIZE.small}
              p='0'
              pl='0.6rem'
              pr='0.4rem'
              color={'#fff'}
              ref={passwordRef}
              onChange={handlePasswordChange}
              type={isShowPassword ? 'text' : 'password'}
            />
            <InputRightElement
              w='0.4rem'
              h='0.36rem'
              children={
                <Flex
                  w='0.4rem'
                  h='0.36rem'
                  align={'center'}
                  justify={'center'}
                  fontSize={FONTSIZE.small}
                  color={'#fff'}
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPasswordButton && (isShowPassword ? <ViewIcon /> : <ViewOffIcon />)}
                </Flex>
              }
            />
          </InputGroup>
        </Stack>
        <Box
          fontSize={FONTSIZE.small}
          zIndex={1}
          p='0.02rem 0.06rem 0.06rem 0.06rem'
          ml='1.6rem'
          onClick={() => jumpToFindAccount()}
        >
          <Text color={'blue.600'} as='span'>
            忘记密码?
          </Text>
        </Box>
        <Button h='0.36rem' colorScheme='gray' p='0' minW='0' w='0.8rem' onClick={() => handleSubmit()}>
          <Text fontSize={FONTSIZE.small} color={'red.500'}>
            登 陆
          </Text>
        </Button>
        <Box pos={'absolute'} bottom={0} zIndex={0}>
          <Image src={footer} w='100%' />
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
