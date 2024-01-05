import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
import img1 from '../assets/styles/gold2.jpg';
import img2 from '../assets/styles/gold4.jpg';
import img3 from '../assets/styles/gold51.jpg';
import img4 from '../assets/styles/gold6.jpg';
export default function Schemes2() {
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
          DIGITAL BANKING
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
           CREDIT CARD OFFER
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
        CYBER SECURITY AWARENESS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         MASTER CARDS
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
        VISA CARDS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         ARP CALCULATOR
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






