import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'features/auth/authSlice';
import * as React from 'react';

interface DashBoardProps {}

const DashBoard: React.FunctionComponent<DashBoardProps> = (props) => {
  const currentuser = useAppSelector(selectCurrentUser);
  if (!currentuser) return null;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <a
        href="https://drive.google.com/drive/folders/1Mt1dW3v7gG1uiaRrCM6srlR_FbV-Fo1_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          alt="avatar"
          height="140"
          image={currentuser.photoUrl.replace('s96', 's500')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bùi Việt Pháp :v
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React Developer
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">CV</Button>
        </CardActions>
      </a>
    </Card>
  );
};

export default React.memo(DashBoard);
