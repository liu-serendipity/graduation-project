import React, { useState, useRef } from 'react';
import { Box, Flex, Image, Text, Stack, Button } from '@chakra-ui/react';
import { FONTSIZE } from '../../const';
import { InputBox, Bar, Toast } from '../../components';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { FindAccountProps } from '../../models';
import { useNavigate } from 'react-router-dom';

import signed_logo from './assets/signed_logo.png';
import footer from './assets/footer.gif';
import { sleep } from '../../untils';

const FindAccount: React.FC<FindAccountProps> = (props) => {
  const accountRef: any = useRef(null);
  const newPasswordRef: any = useRef(null);
  const reNewPasswordRef: any = useRef(null);
  const navigate = useNavigate();

  const handleFind = async () => {
    const account = accountRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const reNewPassword = reNewPasswordRef.current.value;
    try {
      Toast.loading('修改中....', 0);
      if (!account) {
        Toast.info('账号不能为空!');
      } else if (!newPassword) {
        Toast.info('输入新密码!');
      } else if (!reNewPassword) {
        Toast.info('确认新密码!');
      } else if (newPassword !== reNewPassword) {
        Toast.info('两次输入的密码不一致!');
      } else {
        Toast.info('修改成功!');
        await sleep(800);
        navigate('/login');
        Toast.hide();
      }
    } catch (err) {
      Toast.hide();
    }
  };

  return (
    <Box w='100%' h='100vh' pos={'fixed'} bgColor={'red.500'}>
      <Bar title='找回密码' LeftIcon={ChevronLeftIcon} leftLink={'/login'} />
      <Flex flexDir={'column'} align={'center'} mt='1.2rem'>
        <Image src={signed_logo} w='1.2rem' />
        <Stack spacing={1} zIndex={1} mt='0.2rem'>
          <InputBox inputRef={accountRef} label='输入账号' />
          <InputBox inputRef={newPasswordRef} label='新的密码' type='password' />
          <InputBox inputRef={reNewPasswordRef} label='确认密码' type='password' />
        </Stack>
        <Button
          h='0.36rem'
          colorScheme='gray'
          p='0'
          minW='0'
          w='0.8rem'
          onClick={() => handleFind()}
          mt='0.14rem'
          zIndex={1}
        >
          <Text fontSize={FONTSIZE.small} color={'red.500'}>
            确认修改
          </Text>
        </Button>
        <Box pos={'absolute'} bottom={0} zIndex={0}>
          <Image src={footer} w='100%' />
        </Box>
      </Flex>
    </Box>
  );
};

export default FindAccount;
