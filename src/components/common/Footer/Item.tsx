import React, { memo } from 'react';

import { Box, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

interface Item {
  name: string;
  id: string | number;
  avatar: string;
  url: string;

  action?: string;
  actionIcon?: string;
}

interface FooterItemProps {
  items: Item[];
}

const FooterItem: React.FunctionComponent<FooterItemProps> = ({ items }) => {
  return (
    <Box>
      <Demo>
        <List dense={false}>
          {items.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
            >
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label={item.action}
                  >
                    {item.avatar && (
                      <Box
                        component={'img'}
                        src={item.actionIcon}
                        sx={{
                          width: 32,
                          height: 'auto',
                        }}
                      />
                    )}
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  {item.avatar && (
                    <Box
                      component={'img'}
                      src={item.avatar}
                      sx={{
                        width: 32,
                        height: 'auto',
                      }}
                    />
                  )}
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
            </a>
          ))}
        </List>
      </Demo>
    </Box>
  );
};

export default memo(FooterItem);
