import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, Image, AspectRatio, Flex, Avatar, Input } from '@chakra-ui/react';
import { useSearchParams, useNavigate, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// @ts-ignore
import { disablePageScroll, enablePageScroll } from '@soybean/core.scrolllock';
import { sleep } from '../../untils';
import { ImageView, Toast } from '../../components';
import { FONTSIZE } from '../../const';
import { ICONS } from '../../const';
import { useMallContext } from '../../hooks/useMallContext';
import vip from './vip.png';
import reward from './reward.png';
import iconRight from './iconRight.png';
import star_empty from './star_empty.png';
import star_full from './star_full.png';
import iconClose from './iconClose.png';

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
  const { goodsDetail } = useMallContext();

  const [search] = useSearchParams();
  const id = search.get('goods_id' || '');

  const [isShowModal, setIsShowModal] = useState(false);

  const [swiperIndex, setSwiperIndex] = useState(0);

  const [viewImageIndex, setViewImageIndex] = useState(0);
  const [isImageViewer, setIsImageViewer] = useState(false);

  const [commentViewImageIndex, setCommentViewImageIndex] = useState(0);
  const [isCommentViewer, setIsCommentViewer] = useState(false);
  const [commentImages, setCommentImages] = useState([]);

  const [submitType, setSubmitType] = useState<number>();

  // 下单情况
  const [choose, setChoose] = useState<any>({
    choose_id: undefined,
    choose_type: undefined,
    choose_img: undefined,
    choose_total: 1,
  });

  useEffect(() => {
    goodsDetail &&
      setChoose({
        choose_id: goodsDetail.choose_detail?.choose[0].type_id,
        choose_type: goodsDetail.choose_detail?.choose[0].type,
        choose_img: goodsDetail.choose_detail?.choose[0].img,
        choose_total: goodsDetail.choose_detail?.choose[0].total,
      });
  }, [goodsDetail]);

  useEffect(() => {
    setViewImageIndex(swiperIndex);
  }, [swiperIndex]);

  const handleCommentIamgeView = (imgs: any, i: number) => {
    setIsCommentViewer(true);
    setCommentImages(imgs);
    setCommentViewImageIndex(i);
  };

  const handleChoose = (id: number, type: string, img: string, total: number) => {
    setChoose({ choose_id: id, choose_type: type, choose_img: img, choose_total: total });
  };

  const handleInputChange = (e: any) => {
    setChoose({ ...choose, choose_total: e.target.value });
  };

  const handleBlur = () => {
    if (choose.choose_total > 200) {
      setChoose({ ...choose, choose_total: 200 });
    } else if (choose.choose_total < 1) {
      setChoose({ ...choose, choose_total: 1 });
    }
  };

  const handleInputButton = (type: number) => {
    const rules = [-1, 1];
    if (rules.indexOf(type) < 0) return;
    if (type === 1) {
      if (choose.choose_total == 199) return;
      setChoose({ ...choose, choose_total: choose.choose_total + 1 });
    } else {
      if (choose.choose_total === 1) return;
      setChoose({ ...choose, choose_total: choose.choose_total - 1 });
    }
  };

  const handleAddToCart = () => {
    setIsShowModal(true);
    setSubmitType(1);
  };

  const handleBuyNow = () => {
    setIsShowModal(true);
    setSubmitType(2);
  };

  const handleSubmit = async (type: number) => {
    Toast.loading('确认中...', 0);
    const { choose_id, choose_total } = choose;
    const params = { goods_id: id, type_id: choose_id, total: choose_total };

    if (submitType === 1) {
      // 加入购物车
      console.log('加入购物车');
    } else if (submitType === 2) {
      // 立即购买
      console.log('只做记录');
    } else {
      // 非法购买
      Toast.info('出现错误!');
    }

    await sleep(800);
    setIsShowModal(false);
    Toast.hide();
  };

  // 禁止滚动
  useEffect(() => {
    if (isShowModal) {
      const disableRef = document.getElementById('disable_page');
      disablePageScroll(disableRef);
    } else {
      enablePageScroll();
    }
  }, [isShowModal]);

  return (
    goodsDetail.goods_id && (
      <Box>
        <Box bgColor={'gray.100'} pb='0.54rem'>
          {/* 返回按钮 */}
          <BackButton />

          {/* 商品大图 */}
          <Swiper
            slidesPerView={1}
            className='goods_detail_swiper'
            centeredSlides={true}
            spaceBetween={0}
            onSlideChange={(s) => {
              setSwiperIndex(s.realIndex);
            }}
          >
            {goodsDetail.detail_pic?.map((p: any) => {
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
            {goodsDetail.detail_pic?.length > 0 && (
              <ImageView
                isSwiper={true}
                viewImageList={goodsDetail.detail_pic}
                viewImageIndex={viewImageIndex}
                isImageViewer={isImageViewer}
                toCloseView={() => setIsImageViewer(false)}
                indexChange={(i) => {
                  setViewImageIndex(i);
                }}
                fullScreenButton={false}
                spinButton={false}
              />
            )}
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
                  {swiperIndex + 1} / {goodsDetail.detail_pic?.length}
                </Text>
              </Box>
            </Box>
          </Swiper>

          {/* 商品信息 */}
          <Box p='0.06rem 0.16rem' bgColor='#fff'>
            <Flex align={'center'} justify={'space-between'}>
              <Flex fontSize={FONTSIZE.medium} color={'#f2270c'} fontWeight={'bold'} align={'center'}>
                <Box color={'#f2270c'}>
                  {goodsDetail.price_unity}&nbsp;
                  <Text as='span' fontSize={FONTSIZE.bbig}>
                    {(goodsDetail.normal_price / 100).toFixed(2)}
                  </Text>
                </Box>
                {goodsDetail.vip_price && (
                  <Flex color={'#424242'} align={'center'} ml='0.1rem'>
                    <Text as='span' fontSize={FONTSIZE.medium}>
                      {goodsDetail.price_unity}&nbsp;{(goodsDetail.vip_price / 100).toFixed(2)}
                    </Text>
                    <Box w='0.36rem'>
                      <Image src={vip} w='100%' />
                    </Box>
                  </Flex>
                )}
              </Flex>
              <Flex p='0.04rem' align={'center'} flexDir={'column'}>
                <ICONS.IconHeart w='0.2rem' h='0.2rem' fill={goodsDetail.isliked ? '#d81e06' : ''} />
                <Text fontSize={FONTSIZE.ssmall} color={'#424242'} mt='0.04rem'>
                  {goodsDetail.isliked ? '已收藏' : '添加收藏'}
                </Text>
              </Flex>
            </Flex>
            <Box pt='0.06rem'>
              <Text fontSize={FONTSIZE.small} color='#424242' fontWeight={'bold'}>
                {goodsDetail.desc}
              </Text>
            </Box>
            {goodsDetail.ranking && (
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
                    {goodsDetail.ranking}
                  </Text>
                </Flex>
                <Box w='0.16rem'>
                  <Image src={iconRight} w='100%' />
                </Box>
              </Flex>
            )}
          </Box>

          {/* 评论部分 */}
          {goodsDetail.recent_twoComments?.length > 0 && (
            <Box mt='0.1rem' bgColor={'#fff'} borderRadius={'0.12rem'} px='0.2rem'>
              <Flex align={'center'} justify={'space-between'} fontWeight={'bold'} py={'0.1rem'}>
                <Flex align={'center'}>
                  <Text fontSize={FONTSIZE.small}>评论</Text>
                  <Text fontSize={FONTSIZE.ssmall} ml='0.08rem'>
                    {goodsDetail.comment}
                    {goodsDetail.comment_unity}+
                  </Text>
                </Flex>
                <Text fontSize={FONTSIZE.ssmall}>{goodsDetail.good_comment_percent}</Text>
              </Flex>
              <Box px='0.06rem'>
                {goodsDetail.recent_twoComments?.map((item: any, index: number) => {
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
                        {item.imgs.map((p: any, i: number) => {
                          return (
                            <Box
                              key={p.src}
                              w='0.6rem'
                              mr='0.1rem'
                              onClick={() => handleCommentIamgeView(item.imgs, i)}
                            >
                              <Image src={p.src} w='100%' />
                            </Box>
                          );
                        })}
                      </Flex>
                      {index !== goodsDetail.recent_twoComments?.length - 1 && (
                        <Box borderBottom={'1px solid rgba(0,0,0,0.1)'} mb='-1px' mt='0.2rem'></Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>

        {/* 评论图片预览 */}
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

        {/* 页面底部按钮 */}
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
              onClick={() => handleAddToCart()}
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
              onClick={() => handleBuyNow()}
            >
              <Text>立即购买</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* 弹窗 */}
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
            id={'disable_page'}
          >
            <Box
              p='0.1rem 0.2rem 0.5rem 0.2rem'
              bgColor={'#fff'}
              borderTopRadius={'0.12rem'}
              pos={'absolute'}
              bottom={0}
              w='100%'
            >
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
              <Flex align={'center'} h='0.86rem'>
                <Box w='0.86rem'>
                  <Image src={choose.choose_img} w='100%' />
                </Box>
                <Box ml='0.1rem'>
                  <Text fontSize={FONTSIZE.medium} color={'#f2270c'}>
                    {goodsDetail.price_unity}
                    {(goodsDetail.normal_price / 100).toFixed(2)}
                  </Text>
                  <Text fontSize={FONTSIZE.ssmall}>
                    已选
                    {choose.choose_type}，{choose.choose_total}
                    {goodsDetail.choose_detail?.unity}
                  </Text>
                </Box>
              </Flex>
              <Box pt='0.2rem'>
                <Box>
                  <Text fontSize={FONTSIZE.small} fontWeight={'bold'}>
                    {goodsDetail.choose_detail?.fixed}
                  </Text>
                </Box>
                <Box h='3rem' overflow={'scroll'}>
                  {goodsDetail.choose_detail?.choose?.map((c: any) => {
                    return (
                      <Flex
                        bgColor={c.type_id === choose.choose_id ? '#fcedeb' : '#f2f2f2'}
                        border={c.type_id === choose.choose_id ? '1px solid #f2270c' : '1px solid #f2f2f2'}
                        color={c.type_id === choose.choose_id ? '#f2270c' : '#262626'}
                        justify={'center'}
                        align={'center'}
                        p='0.04rem 0.08rem'
                        borderRadius={'0.21rem'}
                        my='0.08rem'
                        w='fit-content'
                        key={c.type}
                        onClick={() => handleChoose(c.type_id, c.type, c.img, c.total)}
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
                    textAlign={'center'}
                    fontSize={FONTSIZE.ssmall}
                    h='0.28rem'
                    w='0.4rem'
                    bgColor={'#f2f2f2'}
                    border={'1px solid #f2f2f2'}
                    focusBorderColor={'#f2f2f2'}
                    type='number'
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    value={choose.choose_total}
                  />
                  <Box p='0.04rem 0.1rem' onClick={() => handleInputButton(1)}>
                    +
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box pos={'fixed'} bottom={0} zIndex={101} bgColor={'#fff'} w='100%' py='0.06rem'>
              <Box
                fontSize={FONTSIZE.small}
                bgImage={'linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c)'}
                w='74%'
                p='0.08rem'
                m='auto'
                color={'#fff'}
                borderRadius={'0.21rem'}
                textAlign={'center'}
                fontWeight={'bold'}
                onClick={() => handleSubmit(1)}
              >
                确认
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    )
  );
};

export default GoodsDetail;
