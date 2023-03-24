import { styled } from '@mui/material';

export const Wrapper = styled('div')(({ theme }) => ({
  background: '#ccc',
  fontSize: theme.spacing(2),
  lineHeight: 1.6,
  '& h1,h2,h3,h4,h5': {
    margin: 0,
    padding: 0,
  },
  '& a[href]': {
    color: 'blue',
  },
}));
export const Container = styled('div')(({ theme }) => ({
  maxWidth: '1400px',

  margin: theme.spacing(4, 'auto'),
}));
export const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '100%',
  '&.align-item-center': {
    alignItems: 'center',
  },
}));

export const Col = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  width: '100%',
  '&.sub': {
    flexBasic: '25%',
    maxWidth: '25%',
  },
  '&.main': {
    flexBasic: '75%%',
    maxWidth: '75%',
  },
}));

export const Header = styled('header')(({ theme }) => ({
  borderBottom: '1px solid #fefefe',
}));

export const Sidebar = styled('aside')(({ theme }) => ({}));
export const Main = styled('main')(({ theme }) => ({}));

export const Avatar = styled('div')(({ theme }) => ({
  borderRadius: '999px',
  display: 'flex',
  overflow: 'hidden',
  '&>img': {
    width: '100%',
    display: 'inline-block',
  },
}));
export const Detail = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  '&>.full-name': {
    fontSize: theme.spacing(4),
  },

  '&>.contact': {
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: theme.spacing(2),
    '&>div': {
      width: 'auto',
    },
  },
  '&>.address,&>.contact,&>.job-role,&>.age': {
    fontStyle: 'italic',
  },

  '& .label': {
    marginRight: theme.spacing(1),
    textDecoration: 'underline',
    fontWeight: 'bold',
  },

  '& .value': {},
}));

export const Title = styled('h3')(({ theme }) => ({
  textDecoration: 'underline',
  fontSize: theme.spacing(3.5),
}));
export const SubTitle = styled('h4')(({ theme }) => ({
  fontSize: theme.spacing(2.5),
}));

export const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  '&>div': {
    paddingLeft: 16,
  },
}));
export const Link = styled('div')(({ theme }) => ({}));
