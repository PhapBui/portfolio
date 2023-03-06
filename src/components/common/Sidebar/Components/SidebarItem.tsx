import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { Typography } from '@mui/material';

const Item = styled('div')(({ theme }) => ({
  padding: '7px 16px',
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.3s ease 0s',
  color: 'rgb(128, 128, 137) ',
  '& .MuiSvgIcon-root': {
    fontSize: '2.6rem',
  },
  '& > .link-item': {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: '1.4rem',
    textDecoration: 'none',
    color: 'rgb(39, 39, 42)',
  },
}));
const Icon = styled('picture')(({ theme }) => ({
  flex: '0 0 32px',
  marginRight: theme.spacing(1),
}));

function SidebarItem() {
  const data = {
    link: 'asdk',
    icon_url:
      'https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp',
    name: 'Uu dai',
  };
  return (
    <Item>
      {data.link && (
        <Link
          className="link-item"
          to={`/${data.link?.replace('https://tiki.vn/', '')}`}
          relative="path"
        >
          <Icon>
            <source
              type="image/webp"
              srcSet={data.icon_url}
            />
            <img
              src={data.icon_url}
              alt={data.name}
              height={32}
              width={32}
            />
          </Icon>
          <Typography
            component="h3"
            variant="h5"
          >
            {data.name}
          </Typography>
        </Link>
      )}
    </Item>
  );
}

export default memo(SidebarItem);
