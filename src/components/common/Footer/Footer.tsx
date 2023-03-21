import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { gitIcon, linkedinIcon, mailIcon, NikeLogo, phoneIcon } from 'assets/images';
import FooterItem from './Item';

export interface FooterProps {}

const data = [
  {
    title: 'Contact',
    items: [
      {
        name: 'Git',
        id: 1,
        avatar: gitIcon,
        url: 'https://github.com/PhapBui',
      },
      {
        name: 'Email',
        id: 2,
        avatar: mailIcon,
        url: 'mailto:bvphap.tk@gmail.com',
      },
      {
        name: 'Phone Number',
        id: 3,
        avatar: phoneIcon,
        url: 'tel:+84986742320',
      },
      {
        name: 'Linkedin',
        id: 4,
        avatar: linkedinIcon,
        url: 'https://www.linkedin.com/in/b%C3%B9i-ph%C3%A1p-8a38a8149/?original_referer=',
      },
    ],
  },
  {
    title: 'Project',
    items: [
      {
        name: 'Portfolio',
        id: 1,
        avatar: NikeLogo,
        url: 'http://localhost:3000/admin',
      },
      {
        name: 'Shoes Store',
        id: 1,
        avatar: NikeLogo,
        url: 'https://portfolio-phapbui.vercel.app/',
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
        <Stack direction="row" gap={2}>
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
              <Typography component="h3" variant="h5">
                {a.title}
              </Typography>
              <FooterItem items={a.items} />
            </Box>
          ))}
        </Stack>
        <Typography textAlign={'center'} variant="subtitle1">
          Copy Right © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
export default React.memo(Footer);
