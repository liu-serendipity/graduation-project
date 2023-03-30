import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, Image, AspectRatio, Flex, Avatar, Input } from '@chakra-ui/react';
import { useSearchParams, useNavigate, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ImageView } from '../../components';
import { FONTSIZE } from '../../const';
import { ICONS } from '../../const';
import vip from './vip.png';
import reward from './reward.png';
import iconRight from './iconRight.png';
import star_empty from './star_empty.png';
import star_full from './star_full.png';
import iconClose from './iconClose.png';

const data = [
  {
    goods_id: 1111,
    isliked: false,
    detail_pic: [
      {
        src: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/36986/29/22495/203028/641030bcF5c867bcf/938fb9a83ec4b8e4.jpg!q80.dpg',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/99170/22/32049/198965/62f4c7c3E90cc44ae/750383c0c5a300e3.jpg!q70.dpg.webp',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/37312/39/18090/128626/62f4c7c2E5ffd1c52/8236638adb4cd18b.jpg!q70.dpg.webp',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/119374/26/26353/563714/62f4c7c3Ece7834aa/929f34a350d37d77.jpg!q70.dpg.webp',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/193934/32/28095/314003/62f4c7c2E32274e1b/e9f8adb1c341e5be.jpg!q70.dpg.webp',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/122454/6/16612/165156/5f9a1c2dE4b12d942/903719cd89a07724.jpg!q70.dpg.webp',
      },
      {
        src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/77607/1/14640/372068/5dbfef23E4aefdd30/45ec4efb4616babd.jpg!q70.dpg.webp',
      },
    ],
    default_choose: [
      {
        type: '【0反式脂肪酸】手撕面包2斤装',
        type_id: 1,
        img: 'https://img14.360buyimg.com/n4/jfs/t1/36986/29/22495/203028/641030bcF5c867bcf/938fb9a83ec4b8e4.jpg',
      },
    ],
    choose_detail: {
      fixed: '颜色',
      unity: '包',
      choose_color: [
        {
          type: '【0反式脂肪酸】手撕面包2斤装',
          type_id: 1,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/36986/29/22495/203028/641030bcF5c867bcf/938fb9a83ec4b8e4.jpg',
        },
        {
          type: '【鲜嫩似蛋挞】岩焗乳酪吐司500g',
          type_id: 2,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/134346/23/30447/238876/6424095dF184a4df3/cf5143d3e44f647b.jpg',
        },
        {
          type: '【奶酪味夹心】手撕面包棒750g',
          type_id: 3,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/161963/4/36117/142813/6412ec70Fee543475/6356eeededf4eb02.jpg',
        },
        {
          type: '早餐搭配【手撕面包+麦片】1400g',
          type_id: 4,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/188146/11/33459/153353/6420f61eFb136a5d7/ab3b6f87a4037098.jpg',
        },
        {
          type: '早餐搭配【肉松吐司+麦片】920g',
          type_id: 5,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/179229/2/33867/206665/641d208cF466730c6/a4386e8764241578.jpg',
        },
        {
          type: '【厚料纯肉松】肉肉海苔吐司520g',
          type_id: 6,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/156645/31/30435/226584/640957afFfb7ef688/31233a6ac6345ca0.jpg',
        },
        {
          type: '【双料谷物夹心】紫米三明治555g',
          type_id: 7,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/175657/4/34277/150455/640957acF1054c56f/e7b4de48e40630f9.jpg',
        },
        {
          type: '【豆乳酱心口味】大波浪面包600g',
          type_id: 8,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/62049/4/25213/151406/6412822eF68a079a8/ddf8cd2b51f7cef2.jpg',
        },
        {
          type: '早餐搭配【手撕面包+鸡胸肉】',
          type_id: 9,
          img: 'https://img14.360buyimg.com/n4/jfs/t1/187301/12/33229/187843/6413d648Fe592411b/48708e61dfd7572d.jpg',
        },
      ],
      choose_total: [
        {
          type_id: 1,
          total: 1,
        },
        {
          type_id: 2,
          total: 2,
        },
        {
          type_id: 3,
          total: 1,
        },
        {
          type_id: 4,
          total: 4,
        },
        {
          type_id: 5,
          total: 1,
        },
        {
          type_id: 6,
          total: 5,
        },
        {
          type_id: 7,
          total: 2,
        },
        {
          type_id: 8,
          total: 3,
        },
        {
          type_id: 9,
          total: 9,
        },
      ],
    },
    normal_price: 2190,
    vip_price: 2090,
    price_unity: '¥',
    desc: '良品铺子手撕面包2斤装 量贩早餐小面包代餐休闲零食办公室点心整箱装礼盒',
    ranking: '糕点/点心热销第1名',
    label: [
      {
        fixed: '满减',
        fixed_info: '每满42元，可减4元现金',
        offer_type: 3,
      },
      {
        fixed: '优惠套装',
        fixed_info: '该商品共有1款优惠套装',
        offer_type: 1,
      },
    ],
    comment: 500,
    comment_unity: '万',
    good_comment_percent: '98%',
    recent_twoComments: [
      {
        userName: '呜呜呜呜呜呜',
        user_head: 'https://storage.360buyimg.com/i.imageUpload/bafaddedddbc3331343437303436393439323634_sma.jpg',
        appraise: 5,
        content:
          '哎，东西不错，味道也蛮好，买家里老人当下午茶吃非常合适，软软的，微微有点甜，营养丰富，口味松软，日期新鲜，容易消化，份量充足',
        imgs: [
          {
            src: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/196107/27/31219/201374/6403495aF85026830/c9837a4efb4e7828.jpg!cc_100x100!q70.dpg.webp',
          },
        ],
        date: '2023-03-04',
      },
      {
        userName: '是生生世世生生世世',
        user_head:
          'https://storage.360buyimg.com/i.imageUpload/636f6f6c7a68756d696e6731343337373837353833343530_sma.jpg',
        appraise: 4,
        content:
          '营养配方：营养搭配合理，添加剂应该比较少吧。给小孩做做点心。口感：口感香味很足，面香味扑鼻。新鲜：日期很新。分量：份量足，一箱可以吃很久了。消化吸收：利于消化。',
        imgs: [
          {
            src: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/127853/12/29518/77649/63fc8274Fc9b3db3e/89eb766c1f5a70c8.jpg!cc_100x100!q70.dpg.webp',
          },
          {
            src: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/174917/37/34053/105296/63fc8275Fa1b5cc93/35b9fcd93b2aece9.jpg!cc_100x100!q70.dpg.webp',
          },
          {
            src: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/158523/40/35098/95136/63fc8275Fc81afcec/161ac9707a6f5ded.jpg!cc_100x100!q70.dpg.webp',
          },
          {
            src: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/193970/32/33034/57697/63fc8276F610d0ef4/4a5f199e9a1c8c07.jpg!cc_100x100!q70.dpg.webp',
          },
        ],
        date: '2023-02-27',
      },
    ],
  },
];

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      pos={'fixed'}
      zIndex={9}
      p='0.1rem 0.08rem 0.1rem 0.14rem'
      bgColor={'rgba(0,0,0,0.5)'}
      borderRadius={'50%'}
      m='0.1rem'
      onClick={() => navigate(-1)}
    >
      <Box
        borderLeft={'2px solid #fff'}
        borderTop={'2px solid #fff'}
        w='0.16rem'
        h='0.16rem'
        transform={'rotate(-45deg)'}
      ></Box>
    </Box>
  );
};

const GoodsDetail = () => {
  const [search] = useSearchParams();

  const id = search.get('goods_id' || '');

  const [isShowModal, setIsShowModal] = useState(false);

  const [swiperIndex, setSwiperIndex] = useState(0);

  const [viewImageIndex, setViewImageIndex] = useState(0);
  const [isImageViewer, setIsImageViewer] = useState(false);

  const [commentViewImageIndex, setCommentViewImageIndex] = useState(0);
  const [isCommentViewer, setIsCommentViewer] = useState(false);
  const [commentImages, setCommentImages] = useState([]);

  // 下单情况
  const [total, setTotal] = useState(1);
  const [typeId, setTypeId] = useState(1);
  const [choose, setChoose] = useState<any>({
    choose_id: data[0].default_choose[0].type_id || undefined,
    choose_type: data[0].default_choose[0].type || undefined,
    choose_img: data[0].default_choose[0].img || undefined,
  });

  useEffect(() => {
    setViewImageIndex(swiperIndex);
  }, [swiperIndex]);

  const handleCommentIamgeView = (imgs: any, i: number) => {
    setIsCommentViewer(true);
    setCommentImages(imgs);
    setCommentViewImageIndex(i);
  };

  const handleChoose = (id: number, type: string, img: string) => {
    setTypeId(id);
    setChoose({ choose_id: id, choose_type: type, choose_img: img });
  };

  const handleInputChange = (e: any) => {
    if (e.target.value > 200) {
      setTotal(200);
    } else if (e.target.value < 1) {
      setTotal(1);
    } else {
      setTotal(e.target.value);
    }
  };

  const handleInputButton = (type: number) => {
    const rules = [-1, 1];
    if (rules.indexOf(type) < 0) return;
    if (type === 1) {
      if (total == 199) return;
      setTotal(total + 1);
    } else {
      if (total === 1) return;
      setTotal(total - 1);
    }
  };

  return (
    <>
      <Box bgColor={'gray.100'} pb='0.54rem'>
        <BackButton />
        <Swiper
          slidesPerView={1}
          className='goods_detail_swiper'
          centeredSlides={true}
          spaceBetween={0}
          onSlideChange={(s) => {
            setSwiperIndex(s.realIndex);
          }}
        >
          {data[0].detail_pic.map((p) => {
            return (
              <SwiperSlide key={p.src}>
                <Box onClick={() => setIsImageViewer(true)}>
                  <AspectRatio ratio={1} w='100%'>
                    <Image src={p.src} />
                  </AspectRatio>
                </Box>
              </SwiperSlide>
            );
          })}
          <ImageView
            isSwiper={true}
            viewImageList={data[0].detail_pic}
            viewImageIndex={viewImageIndex}
            isImageViewer={isImageViewer}
            toCloseView={() => setIsImageViewer(false)}
            indexChange={(i) => {
              setViewImageIndex(i);
            }}
            fullScreenButton={false}
            spinButton={false}
          />
          <Box slot='container-end'>
            <Box
              p='0.01rem 0.1rem'
              mt='-0.4rem'
              zIndex={99}
              pos={'absolute'}
              bgColor={'rgba(0,0,0,.3)'}
              borderLeftRadius={'0.12rem'}
              right={0}
              color={'#fff'}
            >
              <Text fontSize={FONTSIZE.ssmall}>
                {swiperIndex + 1} / {data[0].detail_pic.length}
              </Text>
            </Box>
          </Box>
        </Swiper>
        <Box p='0.06rem 0.16rem' bgColor='#fff'>
          <Flex align={'center'} justify={'space-between'}>
            <Flex fontSize={FONTSIZE.medium} color={'#f2270c'} fontWeight={'bold'} align={'center'}>
              <Box color={'#f2270c'}>
                {data[0].price_unity}&nbsp;
                <Text as='span' fontSize={FONTSIZE.bbig}>
                  {(data[0].normal_price / 100).toFixed(2)}
                </Text>
              </Box>
              {data[0].vip_price && (
                <Flex color={'#424242'} align={'center'} ml='0.1rem'>
                  <Text as='span' fontSize={FONTSIZE.medium}>
                    {data[0].price_unity}&nbsp;{(data[0].vip_price / 100).toFixed(2)}
                  </Text>
                  <Box w='0.36rem'>
                    <Image src={vip} w='100%' />
                  </Box>
                </Flex>
              )}
            </Flex>
            <Flex p='0.04rem' align={'center'} flexDir={'column'}>
              <ICONS.IconHeart w='0.2rem' h='0.2rem' fill={data[0].isliked ? '#d81e06' : ''} />
              <Text fontSize={FONTSIZE.ssmall} color={'#424242'} mt='0.04rem'>
                {data[0].isliked ? '已收藏' : '添加收藏'}
              </Text>
            </Flex>
          </Flex>
          <Box pt='0.06rem'>
            <Text fontSize={FONTSIZE.small} color='#424242' fontWeight={'bold'}>
              {data[0].desc}
            </Text>
          </Box>
          {data[0].ranking && (
            <Flex
              align={'center'}
              bgColor={'red.100'}
              borderLeftRadius={'0.06rem'}
              borderRightRadius={'0.12rem'}
              w='94%'
              justify={'space-between'}
              pr='0.1rem'
              my='0.08rem'
            >
              <Flex align={'center'}>
                <Box w='0.68rem' mr='0.08rem'>
                  <Image src={reward} w='100%' />
                </Box>
                <Text fontSize={FONTSIZE.ssmall} color={'#FA2C19'}>
                  {data[0].ranking}
                </Text>
              </Flex>
              <Box w='0.16rem'>
                <Image src={iconRight} w='100%' />
              </Box>
            </Flex>
          )}
        </Box>
        <Flex p='0.1rem 0.2rem' my='0.1rem' borderRadius={'0.12rem'} bgColor={'#fff'}>
          <Text fontSize={FONTSIZE.small} color='#424242'>
            优惠
          </Text>
          <Box px='0.2rem'>
            {data[0].label.map((item, index) => {
              return (
                <Flex key={item.fixed} fontSize={FONTSIZE.ssmall} align={'center'} pt={index === 0 ? '0' : '0.04rem'}>
                  <Box border={'1px solid #e4393c'} w='fit-content' mr='0.08rem' px='0.02rem'>
                    <Text color={'#e4393c'}>{item.fixed}</Text>
                  </Box>
                  <Text>{item.fixed_info}</Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
        <Box my='0.1rem' p='0.04rem 0.2rem' bgColor={'#fff'} borderRadius={'0.12rem'}>
          <Flex align={'center'} h='0.36rem'>
            <Text fontSize={FONTSIZE.small}>已选</Text>
            <Box fontSize={FONTSIZE.ssmall} ml='0.08rem'>
              <Text>
                {choose.length > 0 ? choose[0].type : data[0].default_choose[0].type}，{total}
                {data[0].choose_detail.unity}
              </Text>
            </Box>
          </Flex>
          <Box borderBottom={'1px solid rgba(0,0,0,0.2)'} mb='-1px'></Box>
          <Flex align={'center'} h='0.36rem'>
            <Text fontSize={FONTSIZE.small}>送至</Text>
            <Box fontSize={FONTSIZE.ssmall} ml='0.08rem'>
              上海市宝山区易家公寓附近
            </Box>
          </Flex>
        </Box>
        {data[0].recent_twoComments.length > 0 && (
          <Box mt='0.1rem' bgColor={'#fff'} borderRadius={'0.12rem'} px='0.2rem'>
            <Flex align={'center'} justify={'space-between'} fontWeight={'bold'} py={'0.1rem'}>
              <Flex align={'center'}>
                <Text fontSize={FONTSIZE.small}>评论</Text>
                <Text fontSize={FONTSIZE.ssmall} ml='0.08rem'>
                  {data[0].comment}
                  {data[0].comment_unity}+
                </Text>
              </Flex>
              <Text fontSize={FONTSIZE.ssmall}>{data[0].good_comment_percent}</Text>
            </Flex>
            <Box px='0.06rem'>
              {data[0].recent_twoComments.map((item, index) => {
                return (
                  <Box key={index} pb='0.2rem'>
                    <Flex align={'center'} justify={'space-between'}>
                      <Flex align={'center'}>
                        <Box w='0.28rem' h='0.28rem'>
                          <Avatar src={item.user_head} size='ssm' />
                        </Box>
                        <Text fontSize={FONTSIZE.ssmall} ml='0.08rem'>
                          {item.userName}
                        </Text>
                      </Flex>
                      <Flex>
                        {new Array(item.appraise).fill(0).map((s, i) => {
                          return (
                            <Box w='0.12rem' key={star_full + i}>
                              <Image src={star_full} w='100%' />
                            </Box>
                          );
                        })}
                        {new Array(5 - item.appraise).fill(0).map((s, i) => {
                          return (
                            <Box w='0.12rem' key={star_empty + i}>
                              <Image src={star_empty} w='100%' />
                            </Box>
                          );
                        })}
                      </Flex>
                    </Flex>
                    <Box py='0.1rem'>
                      <Text fontSize={FONTSIZE.ssmall} textAlign={'justify'}>
                        {item.content}
                      </Text>
                    </Box>
                    <Flex>
                      {item.imgs.map((p, i) => {
                        return (
                          <Box key={p.src} w='0.6rem' mr='0.1rem' onClick={() => handleCommentIamgeView(item.imgs, i)}>
                            <Image src={p.src} w='100%' />
                          </Box>
                        );
                      })}
                    </Flex>
                    {index !== data[0].recent_twoComments.length - 1 && (
                      <Box borderBottom={'1px solid rgba(0,0,0,0.1)'} mb='-1px' mt='0.2rem'></Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
      {commentImages.length > 0 && (
        <ImageView
          isSwiper={false}
          viewImageList={commentImages}
          viewImageIndex={commentViewImageIndex}
          isImageViewer={isCommentViewer}
          toCloseView={() => setIsCommentViewer(false)}
          indexChange={(i) => {
            setCommentViewImageIndex(i);
          }}
          fullScreenButton={false}
          spinButton={false}
        />
      )}
      <Flex
        pos={'fixed'}
        w='100%'
        bgColor={'#fff'}
        bottom={0}
        justify={'space-between'}
        p='0.06rem 0.2rem 0.06rem 0.6rem'
        align={'center'}
      >
        <NavLink to='/cart'>
          <Flex flexDir={'column'} align={'center'} w='0.6rem'>
            <ICONS.IconCart w='0.2rem' h='0.2rem' />
            <Text fontSize={FONTSIZE.ssmall}>购物车</Text>
          </Flex>
        </NavLink>
        <Flex fontSize={FONTSIZE.ssmall} color='#fff'>
          <Flex
            w='0.8rem'
            bgImage={'linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c)'}
            h='0.32rem'
            align={'center'}
            justify={'center'}
            borderRadius={'0.21rem'}
            mr='0.1rem'
            onClick={() => setIsShowModal(true)}
          >
            <Text>加入购物车</Text>
          </Flex>
          <Flex
            w='0.8rem'
            bgImage={'linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d)'}
            h='0.32rem'
            align={'center'}
            justify={'center'}
            borderRadius={'0.21rem'}
          >
            <Text>立即购买</Text>
          </Flex>
        </Flex>
      </Flex>
      {isShowModal && (
        <Box
          pos={'fixed'}
          zIndex={99}
          w='100%'
          h='100vh'
          bgColor={'rgba(0,0,0,0.3)'}
          bottom={0}
          left={0}
          top={0}
          right={0}
        >
          <Box p='0.1rem 0.2rem' bgColor={'#fff'} borderTopRadius={'0.12rem'} pos={'absolute'} bottom={0} w='100%'>
            <Box
              w='0.32rem'
              h='0.32rem'
              pos={'absolute'}
              right={0}
              p='0.04rem'
              mx='0.08rem'
              onClick={() => setIsShowModal(false)}
            >
              <Image src={iconClose} w='100%' />
            </Box>
            <Flex align={'center'}>
              <Box w='0.86rem'>
                <Image src={choose.choose_img} w='100%' />
              </Box>
              <Box ml='0.1rem'>
                <Text fontSize={FONTSIZE.medium} color={'#f2270c'}>
                  {data[0].price_unity}
                  {(data[0].normal_price / 100).toFixed(2)}
                </Text>
                <Text fontSize={FONTSIZE.ssmall}>
                  已选
                  {choose.choose_type}，{total}
                  {data[0].choose_detail.unity}
                </Text>
              </Box>
            </Flex>
            <Box pt='0.2rem'>
              <Box>
                <Text fontSize={FONTSIZE.small} fontWeight={'bold'}>
                  {data[0].choose_detail.fixed}
                </Text>
              </Box>
              <Box>
                {data[0].choose_detail.choose_color.map((c) => {
                  return (
                    <Flex
                      bgColor={c.type_id === typeId ? '#fcedeb' : '#f2f2f2'}
                      border={c.type_id === typeId ? '1px solid #f2270c' : '1px solid #f2f2f2'}
                      color={c.type_id === typeId ? '#f2270c' : '#262626'}
                      justify={'center'}
                      align={'center'}
                      p='0.04rem 0.08rem'
                      borderRadius={'0.21rem'}
                      my='0.08rem'
                      w='fit-content'
                      key={c.type}
                      onClick={() => handleChoose(c.type_id, c.type, c.img)}
                    >
                      <Text fontSize={FONTSIZE.ssmall} fontWeight={'bold'}>
                        {c.type}
                      </Text>
                    </Flex>
                  );
                })}
              </Box>
            </Box>
            <Flex pt='0.1rem' align={'center'} justify={'space-between'} fontWeight={'bold'}>
              <Text fontSize={FONTSIZE.small}>数量</Text>
              <Flex fontSize={FONTSIZE.small} align={'center'}>
                <Box p='0.04rem 0.1rem' onClick={() => handleInputButton(-1)}>
                  -
                </Box>
                <Input
                  p='0'
                  m='0'
                  px='0.04rem'
                  fontSize={FONTSIZE.ssmall}
                  h='0.28rem'
                  w='0.4rem'
                  bgColor={'#f2f2f2'}
                  border={'1px solid #f2f2f2'}
                  focusBorderColor={'#f2f2f2'}
                  type='number'
                  onChange={handleInputChange}
                  value={total}
                />
                <Box p='0.04rem 0.1rem' onClick={() => handleInputButton(1)}>
                  +
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GoodsDetail;
