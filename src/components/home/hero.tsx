import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Slick from 'components/common/Carousel/Slick';
import { memo } from 'react';
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
function HeroBanner(props: HeroBannerProps) {
  return (
    <Box component="section">
      <Stack
        direction="row"
        columnGap={2}
      >
        <Item sx={{ width: { lg: '75%', xs: '100%' }, height: { xl: 280, lg: 240 } }}>
          <Slick setting={settings}>
            <div>
              <img
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/67/27/b0/3c59c3f7e4b1f22fc39e706a47c80af7.jpg.webp"
                alt=""
              />
            </div>
            <div>2</div>
          </Slick>
        </Item>

        <Item
          sx={{
            width: { lg: '25%', md: '0%' },
            height: { xl: 280, lg: 240 },
            display: { lg: 'block', md: 'none' },
          }}
        >
          <Box sx={{ width: '100%', height: '100%' }}>
            <img
              src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/07/ac/7e/4fbe2badc757e4e494c85e3f5bda1a95.jpg.webp"
              alt=""
              width={'100%'}
              height={'100%'}
            />
          </Box>
        </Item>
      </Stack>
    </Box>
  );
}
export default memo(HeroBanner);
