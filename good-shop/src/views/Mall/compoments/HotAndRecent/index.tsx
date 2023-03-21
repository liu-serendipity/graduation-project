import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { StarIcon, Search2Icon, DeleteIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../../../const';
import { NavLink, useNavigate } from 'react-router-dom';

interface HotAndRecentProps {
  searchValue: string;
}

export const HotAndRecent = ({ searchValue }: HotAndRecentProps) => {
  const [recentSearch, setRecentSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('good-shop-recent-search')) {
      const data = JSON.parse(localStorage.getItem('good-shop-recent-search') || '[]');
      setRecentSearch(data);
    }
  }, [searchValue]);

  const handleDelete = () => {
    setRecentSearch([]);
    localStorage.removeItem('good-shop-recent-search');
  };

  const handleRecentKeyClick = (val: string) => {
    navigate(`/search?q=${val}`);
    if (localStorage.getItem('good-shop-recent-search')) {
      const temp = JSON.parse(localStorage.getItem('good-shop-recent-search') || '[]');
      const index = temp.indexOf(val);
      if (index >= 0) {
        temp.splice(index, 1);
      }
      temp.unshift(val);
      localStorage.setItem('good-shop-recent-search', JSON.stringify(temp));
    } else {
      localStorage.setItem('good-shop-recent-search', JSON.stringify([val]));
    }
  };

  return (
    <Box bgColor={'gray.100'} p='0.08rem 0.2rem' mt='0.06rem' borderRadius={'0.16rem'}>
      <Box color='gray.500'>
        <Flex align={'center'}>
          <StarIcon fontSize={FONTSIZE.small} />
          <Text fontSize={FONTSIZE.medium} ml='0.04rem'>
            热门搜索
          </Text>
        </Flex>
        <Flex flexWrap={'wrap'} ml='0.04rem'>
          <Box m='0.02rem'>
            <NavLink to='/search'>
              <Box bgColor={'#d81e06'} w='fit-content' p='0.02rem 0.08rem' borderRadius={'0.14rem'}>
                <Text fontSize={FONTSIZE.small} color={'#fff'}>
                  接口待接入
                </Text>
              </Box>
            </NavLink>
          </Box>
        </Flex>
      </Box>
      {recentSearch.length > 0 && (
        <Box color='gray.500' mt='0.1rem'>
          <Flex align={'center'} fontSize={FONTSIZE.small} justify={'space-between'}>
            <Flex align={'center'}>
              <Search2Icon />
              <Text fontSize={FONTSIZE.medium} ml='0.04rem'>
                最近搜索
              </Text>
            </Flex>
            <DeleteIcon onClick={handleDelete} />
          </Flex>
          <Flex flexWrap={'wrap'} ml='0.04rem'>
            {recentSearch.map((item) => {
              return (
                <Box
                  bgColor={'#d81e06'}
                  w='fit-content'
                  p='0.02rem 0.08rem'
                  borderRadius={'0.14rem'}
                  m='0.02rem'
                  key={item}
                  onClick={() => handleRecentKeyClick(item)}
                >
                  <Text fontSize={FONTSIZE.small} color={'#fff'}>
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
};
