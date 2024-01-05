
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import '../assets/styles/Cards2.css'
import  img1 from '../assets/styles/scheme6.jpg'
import img2 from '../assets/styles/scheme7.jpeg'
import img3 from '../assets/styles/scheme8.jpg'
import img4 from '../assets/styles/scheme1.jpg'
const Cards2 = () => {
    const cardData = [
        {
            image: img1,
            alt: 'Image 1',
            title: 'Rashtriya Gokul mission',
            content: 'Under this scheme parents or legal guardians',
        },
        {
            image: img2,
            alt: 'Image 2',
            title: 'Savya Shiksha Abhiyaan',
            content: 'The scheme covers artisans and craftspeople who work with hands and tools',
        },
        {
            image: img3,
            alt: 'Image 3',
            title: 'Smile 75',
            content: 'Identified municipal corporations in the spirit .',
        },
        {
            image: img4,
            alt: 'Image 4',
            title: 'Sukanya Samriddhi Yojana',
            content: 'Under this scheme parents or legal guardians',
        },
       
       
    ];

    return (
        <div>
            
            {/* <div className='homeimage'>
                <p className='quote'>"Life’s got problems, we’ve got solutions."</p>
                <img src={homeimg} alt="Logo" style={{ height: '700px', width: '1600px' }} className="img" />
            </div> */}

            {/* Your cards section */}
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

export default Cards2;