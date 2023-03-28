import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SearchBox, HotAndRecent, Recommend } from './compoments';

const list = [
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/36986/29/22495/203028/641030bcF5c867bcf/938fb9a83ec4b8e4.jpg',
    desc: '良品铺子手撕面包2斤装 量贩早餐小面包代餐休闲零食办公室点心整箱装礼盒',
    isHot: true,
    ranking: '糕点/点心热销第1名',
    label: ['满减'],
    normal_price: 2190,
    comment: 500,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1111,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/104437/31/37682/205331/64218699F8031ea57/0b34e7603297fa74.jpg',
    desc: '良品铺子 高蛋白肉脯500g(约27小包)靖江的猪肉脯肉干肉脯休闲零食猪肉干',
    isHot: true,
    ranking: '肉干肉脯热销第2名',
    label: ['限购', '满减'],
    normal_price: 4390,
    comment: 100,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1112,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/126700/3/30590/202650/641a59d8F468fc9c6/091b914c0c922759.jpg',
    desc: '良品铺子 柠檬去骨凤爪(酸辣味)400g无骨鸡爪肉干肉脯脱骨剔骨卤味零食',
    isHot: true,
    ranking: null,
    label: [],
    normal_price: 6990,
    comment: 100,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: 6800,
    price_unity: '¥',
    goods_id: 1113,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/184756/36/33075/138205/64071034F92493537/bc97af6850f574d9.jpg',
    desc: '良品铺子 猪肉脯自然片靖江风味猪肉干肉脯肉类零食休闲网红小吃100g',
    isHot: true,
    ranking: '肉干肉脯热销第1名',
    label: ['满减'],
    normal_price: 1590,
    comment: 500,
    comment_unity: '万',
    good_comment_percent: '99%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1114,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/130841/15/34259/189712/64114214Fd1e5ba5a/3ad33b63e5a3f718.jpg',
    desc: '良品铺子 黑麦全麦面包1000g/箱 早餐粗粮低脂健身轻食代餐零蔗糖吐司零食',
    isHot: true,
    ranking: '糕点/点心热销第2名',
    label: ['满减'],
    normal_price: 2490,
    comment: 100,
    comment_unity: '万',
    good_comment_percent: '97%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1115,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/139808/7/30417/238876/6412ec72Fcfb50f76/97fc4e23b124a9d6.jpg',
    desc: '良品铺子 岩焗乳酪吐司 手撕面包早餐饼干蛋糕吐司办公室小吃休闲零食500g',
    isHot: true,
    ranking: null,
    label: ['满减'],
    normal_price: 2290,
    comment: 500,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1116,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/166456/12/35299/248607/642184ceF8ef5258b/1b070a40afecc699.jpg',
    desc: '良品铺子 每日坚果坚果炒货开心果葡萄干儿童孕妇干果送礼出游30包750g/箱',
    isHot: true,
    ranking: null,
    label: [],
    normal_price: 7400,
    comment: 200,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1117,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/212007/36/27427/230099/6422421cFdc9ad1b1/5013e6c17c256b0d.jpg',
    desc: '良品铺子 7款纯坚果每日坚果坚果炒货干果开心果腰果送礼出游30包750g/箱',
    isHot: true,
    ranking: null,
    label: [],
    normal_price: 8900,
    comment: 200,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1118,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/165290/10/32639/178981/6414303cFe2b62db9/103e051119fd4302.jpg',
    desc: '良品铺子 西瓜子话梅味年货650g西瓜子小包装坚果炒货零食大礼包休闲小吃',
    isHot: false,
    ranking: null,
    label: [],
    normal_price: 3590,
    comment: 20,
    comment_unity: '万',
    good_comment_percent: '99%',
    vip_price: 3500,
    price_unity: '¥',
    goods_id: 1119,
  },
  {
    pic: 'https://m.360buyimg.com/n1/s440x440_jfs/t1/91755/5/33308/225641/641b2284Fdee0f7c6/b8c30cbca7a94ffd.jpg',
    desc: '良品铺子 猪事顺利零食大礼包30包坚果猪肉脯礼盒送女友6斤随机发货',
    isHot: true,
    ranking: '零食大礼包热销第1名',
    label: ['满减'],
    normal_price: 13800,
    comment: 200,
    comment_unity: '万',
    good_comment_percent: '98%',
    vip_price: null,
    price_unity: '¥',
    goods_id: 1120,
  },
];

const hot = ['瓜子', '葡萄干', '零食大礼包', '猪肉脯', '开心果'];

const Mall = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hotList, setHotList] = useState<any[]>([]);
  const [goodsList, setGoodsList] = useState<any[]>([]);

  const collectValue = (val: string) => {
    setSearchValue(val);
  };

  useEffect(() => {
    setGoodsList(list);
    setHotList(hot);
  }, []);

  return (
    <Box w='100%' bgColor={'gray.100'} pb='0.58rem'>
      <Flex
        bgColor={'red.500'}
        justify='center'
        align={'center'}
        pt='0.08rem'
        pb='0.06rem'
        pos={'fixed'}
        w='100%'
        mt='-0.5rem'
      >
        <Box w='94%'>
          <SearchBox onCollect={collectValue} />
        </Box>
      </Flex>
      <Box mt='0.5rem' w='100%' pt='0.08rem'>
        <HotAndRecent searchValue={searchValue} hotList={hotList} />
      </Box>
      <Box mt='0.08rem'>
        <Recommend data={goodsList} />
      </Box>
    </Box>
  );
};

export default Mall;
