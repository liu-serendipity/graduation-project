import React, { useState, useRef } from 'react';
import { Box, Flex, Image, Text, Stack, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, InfoIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../const';
import { Toast, Bar, InputBox } from '../../components';
import { sleep } from '../../untils';
import { useNavigate } from 'react-router-dom';
import { RegisterProps } from '../../models';

import footer from './assets/footer.gif';
import signed_logo from './assets/signed_logo.png';

const Register: React.FC<RegisterProps> = (props) => {
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
            zIndex={1}
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
