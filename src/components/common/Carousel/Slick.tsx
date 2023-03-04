import { styled } from '@mui/material';
import { memo } from 'react';
import Slider, { InnerSlider, Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SliderWrapper = styled(Slider)({
  height: '100%',
  '& .slick-list': {
    height: '100%',
  },
  '&:hover .slick-arrow': {
    opacity: 1,
  },
  '& .slick-arrow': {
    opacity: '0.3',
  },
  '& .slick-prev': {
    left: '10px',
    zIndex: '1',
  },
  '& .slick-next': {
    right: '10px',
    zIndex: '1',
  },
  '& .slick-next:before, & .slick-prev:before': {
    color: '#2f52d3',
  },
  '&>.slick-dots': {
    bottom: 0,
  },
  '& .slick-slide img': {
    width: '100%',
  },
});

export interface SlickSetting {
  children: InnerSlider | any;
  setting: Settings;
}

function Slick({ setting, children }: SlickSetting) {
  return <SliderWrapper {...setting}>{children}</SliderWrapper>;
}

export default memo(Slick);
