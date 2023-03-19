import { styled } from '@mui/material';
import { ProductDetails } from 'models/product';
import { memo } from 'react';
import { Link } from 'react-router-dom';
const Item = styled(Link)({
  display: 'flex',
  color: 'rgb(39, 39, 42)',
  lineHeight: '150%',
  alignItems: 'center',
  padding: '0px 16px',
  textDecoration: 'none',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    backgroundColor: 'rgba(39, 39, 42, 0.12)',
  },
  '&.hide': {
    display: 'none',
  },
});

interface SearchResultItemProps {
  product: ProductDetails;
  classNames?: string;
}

function SearchResultItem({ product, classNames }: SearchResultItemProps) {
  return (
    <Item
      to={`/product/${product.id}`}
      className={classNames}
    >
      <img
        src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
        alt={product.name}
        width={35}
        height={35}
      />
      <div className={product.slug}>{product.name}</div>
    </Item>
  );
}

export default memo(SearchResultItem);
