import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
import img1 from '../assets/styles/scheme2.jpeg';
import img2 from '../assets/styles/scheme8.jpg';
import img3 from '../assets/styles/scheme7.jpeg';
import img4 from '../assets/styles/scheme5.jpg';
export default function Schemes() {
  return (
    <Grid container spacing={2}>
        <Grid  item sx={{ margin: '0 8px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NET BANKING
        </Typography>
        <Typography variant="body2" color="text.secondary">
          REGISTER AND DO CASHLESS PAYMENTS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
        <Grid  item sx={{ margin: '0 8px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          LOANS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         INCLUDING HOUSING LOANS, EDUCATIONAL LOANS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
        <Grid  item sx={{ margin: '0 8px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        APPLY INSURANCE
        </Typography>
        <Typography variant="body2" color="text.secondary">
         GET INSURANCE AT 5% OFFER
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
        <Grid  item sx={{ margin: '0 8px' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        GET CREDIT CARDS AND DEBIT CARDS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         GET THE CARD AND MAKE IT EASIER
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}