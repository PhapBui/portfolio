import { Card, Typography, Stack, styled } from '@mui/material';

export const CardWrapper = styled(Card)(({ theme }) => ({
  position: 'relative',
}));

export const ProductName = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  color: 'rgba(0, 0, 0, 0.87)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const ProductPrice = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-end',
  '&.has-discount': {
    color: 'rgb(255, 66, 78)',
    '&>.original-price': {
      color: 'rgb(128, 128, 137)',
      textDecoration: 'line-through',
      fontSize: '14px',
      lineHeight: '20px',
    },
    '&>.current-price': {
      fontSize: theme.spacing(2),
      fontWeight: 600,
    },
  },
}));

export const ProductDiscoutBadge = styled(Typography)(({ theme }) => ({
  backgroundColor: 'red',
  color: 'white',
  padding: theme.spacing(0.5, 1),
  position: 'absolute',
  top: 0,
  right: 0,
}));
