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
import { keyframes } from '@emotion/css';
import { Toast } from '../../components';
import { sleep } from '../../untils';

const shake = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(+2px, 0, 0); }
  30%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(+4px, 0, 0); }
  50% { transform: translate3d(-4px, 0, 0); }
`;

const Login = () => {
  const navigate = useNavigate();
  const passwordRef: any = useRef(null);
  const accountRef: any = useRef(null);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [accountEmpty, setAccountEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
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

  const handleSubmit = async () => {
    if (account && password) {
      // 简单校验
      try {
        Toast.loading('登陆中....', 0);
        if (account === password) {
          Toast.info('登陆成功');
          await sleep(800);
          navigate('/home');
          Toast.hide();
        } else {
          Toast.info('账号或密码错误');
        }
      } catch (err) {
        Toast.hide();
      }
    } else if (!account) {
      setAccountEmpty(true);
      await sleep(1000);
      setAccountEmpty(false);
    } else if (!password) {
      setPasswordEmpty(true);
      await sleep(1000);
      setPasswordEmpty(false);
    }
  };

  useEffect(() => {
    setIsShowPasswordButton(password ? true : false);
  }, [password]);

  useEffect(() => {
    if (isShowPassword) {
      passwordRef.current.focus();
    }
  }, [isShowPassword]);

  return (
    <>
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
            <Box animation={accountEmpty ? `${shake} 1s ease` : ''}>
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
            </Box>
            <Box animation={passwordEmpty ? `${shake} 1s ease` : ''}>
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
                  onBlur={() => setIsShowPassword(false)}
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
            </Box>
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
              Login
            </Text>
          </Button>
          <Box pos={'absolute'} bottom={0} zIndex={0}>
            <Image src={footer} w='100%' />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
