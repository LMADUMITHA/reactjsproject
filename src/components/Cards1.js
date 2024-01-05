// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Chip from '@mui/joy/Chip';
// import Link from '@mui/joy/Link';
// import Typography from '@mui/joy/Typography';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import img1 from '../assets/styles/card1.jpg'
// export default function ProductCard() {
//   return (
//     <div className="title">
        
//     <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
//       <CardOverflow>
//         <AspectRatio sx={{ minWidth: 200 }}>
//           <img
//             src={img1}
//             srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
//             loading="lazy"
//             alt=""
//           />
          
//         </AspectRatio>
//       </CardOverflow>
//       <CardContent>
//         <Typography level="body-xs">Bluetooth Headset</Typography>
//         <Link
//           href="#product-card"
//           fontWeight="md"
//           color="neutral"
//           textColor="text.primary"
//           overlay
//           endDecorator={<ArrowOutwardIcon />}
//         >
//           Super Rockez A400
//         </Link>

//         <Typography
//           level="title-lg"
//           sx={{ mt: 1, fontWeight: 'xl' }}
//           endDecorator={
//             <Chip component="span" size="sm" variant="soft" color="success">
//               starts on dec 5
//             </Chip>
//           }
//         >
//           2,900 per month
//         </Typography>
//         <Typography level="body-sm">
//           (Only <b>7</b> days left!)
//         </Typography>
//       </CardContent>
//       <CardOverflow>
//         <Button variant="solid" color="success" size="lg">
//           Pradan Mantri scheme
//         </Button>
//       </CardOverflow>
//     </Card>
//    </div>





//   );
// }







import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import '../assets/styles/Cards1.css'
import  img1 from '../assets/styles/scheme1.jpg'
import img2 from '../assets/styles/scheme2.jpeg'
import img3 from '../assets/styles/scheme3.jpeg'
import img4 from '../assets/styles/scheme5.jpg'
const Cards1 = () => {
    const cardData = [
        {
            image: img1,
            alt: 'Image 1',
            title: 'PM SVANidhi',
            content: 'Introduced on 1st June .',
        },
        {
            image: img2,
            alt: 'Image 2',
            title: 'Sukanya jeevan Yojana',
            content: 'Microcredit through PMMY encouraged raised earnings',
        },
        {
            image: img3,
            alt: 'Image 3',
            title: 'The umbrella scheme',
            content: 'Supporting the welfare measures for transgenders',
        },
        {
            image: img4,
            alt: 'Image 4',
            title: 'Samarth schemes',
            content: 'For the welfare in medical facilities',
        },
       
       
    ];

    return (
        <div>
            
            <h1>IMPORTANT SCHEMES INTRODUCED IN 2023</h1>
            <marquee bgcolor='yellowgreen'><h3>Scammers have figured out countless ways to cheat you out of your money over the phone. So call the toll free no 044-745284628</h3></marquee>
            <div style={{ display: 'flex', justifyContent: '', marginTop: '20px' }}>
                {cardData.map((card, index) => (
                    <Card key={index} sx={{ maxWidth:'600px', margin: '0 70px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={card.image}
                                alt={card.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.content}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards1;