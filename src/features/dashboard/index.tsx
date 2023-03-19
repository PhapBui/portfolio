import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'features/auth/authSlice';
import * as React from 'react';
import { capilizeLetter } from 'utils/textTransform';

interface DashBoardProps {}

const DashBoard: React.FunctionComponent<DashBoardProps> = (props) => {
  const currentuser = useAppSelector(selectCurrentUser);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={currentuser.photoUrl.replace('s96', 's500')}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {capilizeLetter(currentuser.name)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(DashBoard);
