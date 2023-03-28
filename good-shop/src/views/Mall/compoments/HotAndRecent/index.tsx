import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { StarIcon, Search2Icon, DeleteIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../../../const';
import { NavLink, useNavigate } from 'react-router-dom';

interface HotAndRecentProps {
  searchValue?: string;
  hotList?: any[];
}

export const HotAndRecent = ({ searchValue, hotList = [] }: HotAndRecentProps) => {
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
    <>
      <Box
        color='gray.500'
        borderRadius={'0.16rem'}
        bgColor={'#fff'}
        w='3.6rem'
        m='auto'
        p='0.06rem 0.1rem'
        fontSize={FONTSIZE.small}
      >
        <Flex align={'center'}>
          <StarIcon />
          <Text ml='0.04rem'>热门搜索</Text>
        </Flex>
        <Flex flexWrap={'wrap'} w='3.4rem' pt='0.04rem' pl='0.08rem' pr='0.08rem'>
          {hotList.map((item) => {
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
      {recentSearch.length > 0 && (
        <Box
          color='gray.500'
          m='auto'
          mt='0.08rem'
          borderRadius={'0.16rem'}
          bgColor={'#fff'}
          w='3.6rem'
          p='0.06rem 0.1rem'
        >
          <Flex align={'center'} fontSize={FONTSIZE.small} justify={'space-between'}>
            <Flex align={'center'}>
              <Search2Icon />
              <Text ml='0.04rem'>最近搜索</Text>
            </Flex>
            <DeleteIcon onClick={handleDelete} />
          </Flex>
          <Flex flexWrap={'wrap'} w='3.4rem' pt='0.04rem' pl='0.08rem' pr='0.08rem'>
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
    </>
  );
};
