import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { logo } from 'assets/images';
import FooterItem from './Item';

export interface FooterProps {}

const data = [
  {
    title: 'Contact',
    items: [
      {
        name: 'git',
        id: 1,
        avatar: logo,
        url: '',
      },
      {
        name: 'fb',
        id: 2,
        avatar: logo,
        url: '',
      },
    ],
  },
  {
    title: 'Project',
    items: [
      {
        name: 'Shop',
        id: 1,
        avatar: logo,
        url: '',
      },
      {
        name: 'git',
        id: 1,
        avatar: logo,
        url: '',
      },
    ],
  },
];

function Footer(props: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        mt: 3,
        p: 2,
      }}
      bgcolor={'#fff'}
      borderRadius={2}
    >
      <Container fixed>
        <Stack
          direction="row"
          gap={2}
        >
          {data.map((a, b) => (
            <Box
              sx={{
                width: {
                  md: 'calc(100% / 2 - 8px)',
                  xs: 'calc(100%)',
                },
                maxWidth: {
                  md: 'calc(100% / 2 - 8px)',
                  xs: 'calc(100% )',
                },
                flexBasis: {
                  md: 'calc(100% / 2 - 8px)',
                  xs: 'calc(100%)',
                },
              }}
              key={b}
            >
              <Typography
                component="h3"
                variant="h5"
              >
                {a.title}
              </Typography>
              <FooterItem items={a.items} />
            </Box>
          ))}
        </Stack>
        <Typography textAlign={'center'}>Copy Right © {new Date().getFullYear()}</Typography>
      </Container>
    </Box>
  );
}
export default React.memo(Footer);
