import React, { useState, useRef, useEffect } from 'react';
import {
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
import { ChevronLeftIcon, InfoIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../const';
import { Bar } from '../../components/Bar';
import { Toast } from '../../components';
import { sleep } from '../../untils';
import { useNavigate } from 'react-router-dom';
import footer from './assets/footer.gif';
import signed_logo from './assets/signed_logo.png';

interface InputBoxProps {
  inputRef?: any;
  label?: string;
  type?: string;
}

const InputBox = ({ inputRef, label, type = 'text' }: InputBoxProps) => {
  const rules = ['text', 'password'];
  if (rules.indexOf(type) < 0)
    return (
      <Box>
        <Text fontSize={FONTSIZE.medium}>{`${type}不符合类型`}</Text>
      </Box>
    );
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value.trim());
  };

  return (
    <InputGroup w='2.4rem'>
      <InputLeftElement
        pointerEvents='none'
        h='0.36rem'
        children={
          <Box>
            <Text fontSize={FONTSIZE.small} textAlign={'center'}>
              {label}:
            </Text>
          </Box>
        }
        w='0.72rem'
        m='0'
        ml='0.02rem'
        color={'#fff'}
      />
      <Input
        focusBorderColor='#fff'
        h='0.36rem'
        fontSize={FONTSIZE.small}
        p='0'
        pl='0.74rem'
        pr='0.4rem'
        color={'#fff'}
        value={value.trim()}
        ref={inputRef}
        onChange={handleChange}
        type={type === 'text' ? 'text' : isShowPassword ? 'text' : 'password'}
        onBlur={
          type === 'password'
            ? () => setIsShowPassword(false)
            : () => {
                return null;
              }
        }
      />
      {type === 'password' && (
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
              {value && (isShowPassword ? <ViewIcon /> : <ViewOffIcon />)}
            </Flex>
          }
        />
      )}
    </InputGroup>
  );
};

const Register = () => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  // 通过ref取值
  const accountRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const rePasswordRef: any = useRef(null);

  // 导航栏右部icon点击事件
  const barRightClick = () => {
    setIsShowInfo(true);
  };

  // 打开隐私协议
  const openPrivacyAgreement = () => {
    navigate('/privacyAgreement');
  };

  // 立即注册按钮事件
  const handleRegister = async () => {
    const account = accountRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;
    try {
      Toast.loading('loading...', 0);
      if (!account) {
        Toast.info('请输入账号!');
      } else if (!password) {
        Toast.info('请输入密码!');
      } else if (!rePassword) {
        Toast.info('请确认密码!');
      } else if (password !== rePassword) {
        Toast.info('两次输入的密码不一致!');
      } else {
        if (agree) {
          Toast.info('注册成功!');
          await sleep(800);
          navigate('/login');
          Toast.hide();
        } else {
          Toast.info('请阅读隐私协议同意并勾选!');
        }
      }
    } catch (err) {
      Toast.hide();
    }
  };

  return (
    <>
      <Box w='100%' h='100vh' bgColor={'red.500'} pos={'fixed'}>
        <Bar
          title='注 册'
          LeftIcon={ChevronLeftIcon}
          RightIcon={InfoIcon}
          leftLink={'/login'}
          rightClick={barRightClick}
        />
        <Flex flexDir={'column'} align={'center'} mt='1.2rem'>
          <Image src={signed_logo} w='1.2rem' />
          <Stack spacing={1} zIndex={1} mt='0.2rem'>
            <InputBox inputRef={accountRef} label='输入账号' />
            <InputBox inputRef={passwordRef} label='输入密码' type='password' />
            <InputBox inputRef={rePasswordRef} label='确认密码' type='password' />
          </Stack>
          <Button
            h='0.36rem'
            colorScheme='gray'
            p='0'
            minW='0'
            w='0.8rem'
            onClick={() => handleRegister()}
            mt='0.14rem'
          >
            <Text fontSize={FONTSIZE.small} color={'red.500'}>
              立即注册
            </Text>
          </Button>
          <Flex
            fontSize={'0.12rem'}
            zIndex={1}
            p='0.06rem 0.06rem 0.06rem 0.06rem'
            mt='0.04rem'
            align={'center'}
            onClick={() => setAgree(!agree)}
            pos='relative'
          >
            <Box
              borderRadius={'50%'}
              w='0.1rem'
              h='0.1rem'
              border={agree ? '1px solid #fff' : '1px solid #424242'}
              bgColor={agree ? 'yellow.300' : 'transparent'}
              mr='0.04rem'
            ></Box>
            <Text color={'#424242'} as='span'>
              阅读隐私协议同意并勾选
            </Text>
            <Text color={'blue.600'} as='span'>
              《隐私协议》
            </Text>
            <Box w='0.72rem' h='0.24rem' pos='absolute' right={'0.06rem'} onClick={() => openPrivacyAgreement()}></Box>
          </Flex>
          <Box pos={'absolute'} bottom={0} zIndex={0}>
            <Image src={footer} w='100%' />
          </Box>
        </Flex>
      </Box>
      {isShowInfo && (
        <Flex
          w='100%'
          h='100vh'
          bgColor={'rgba(0,0,0,0.4)'}
          pos={'absolute'}
          zIndex={99}
          left='0'
          top='0'
          right='0'
          bottom='0'
          justify={'center'}
          align={'center'}
          onClick={() => setIsShowInfo(false)}
        >
          <Box w='80%' textAlign={'center'}>
            <Text fontSize={FONTSIZE.medium} color={'#fff'}>
              作者
              <br />
              LLM
              <br />
              很帅!!!
              <br />
              嘿嘿嘿😁
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Register;
