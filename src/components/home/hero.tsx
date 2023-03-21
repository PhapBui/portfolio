import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Slick from 'components/common/Carousel/Slick';
import { memo } from 'react';
import { Link } from 'react-router-dom';
export interface HeroBannerProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slickItems = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dsjbcv5xe/image/upload/v1679300966/nike-dunk-black-white-banner-censorvn-1400x630_zhioet.webp',
    path: '/admin',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dsjbcv5xe/image/upload/v1679301277/air-jordan-1-mid-se-gs-diamond-1400x630_oikmuz.webp',
    path: '/admin',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dsjbcv5xe/image/upload/v1679301274/air-jordan-4-military-black-banner-pc-1400x630_hpiwag.jpg',
    path: '/admin',
  },
];

function HeroBanner(props: HeroBannerProps) {
  return (
    <Box component="section">
      <Stack direction="row" columnGap={2}>
        <Item sx={{ width: { lg: '75%', xs: '100%' }, height: { xl: 280, lg: 240 } }}>
          <Slick setting={settings}>
            {slickItems.map((item) => (
              <Link to={item.path} key={item.id}>
                <Box component="img" src={item.imageUrl} alt="" />
              </Link>
            ))}
          </Slick>
        </Item>

        <Item
          sx={{
            width: { lg: '25%', md: '0%' },
            height: { xl: 280, lg: 240 },
            display: { lg: 'block', md: 'none', xs: 'none' },
          }}
        >
          <Box sx={{ width: '100%', height: '100%' }}>
            <Link to="/product/air-jordan-xxxvii-low-pf-p72">
              <img
                src="https://res.cloudinary.com/dsjbcv5xe/image/upload/v1678694725/13_emxyu9.webp"
                alt=""
                width={'100%'}
                height={'100%'}
              />
            </Link>
          </Box>
        </Item>
      </Stack>
    </Box>
  );
}
export default memo(HeroBanner);
