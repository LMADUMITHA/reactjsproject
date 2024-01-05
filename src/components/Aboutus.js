// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardActions from '@mui/joy/CardActions';
// import CircularProgress from '@mui/joy/CircularProgress';
// import Typography from '@mui/joy/Typography';
// import SvgIcon from '@mui/joy/SvgIcon';
// import {Grid} from '@mui/joy'
// export default function CardInvertedColors() {
//   return (
//     <Grid container spacing={5}>
//         <Grid item xs={24} md={12} lg={8} xl={9}>
//     <Card variant="solid" color="primary" invertedColors>
//       <CardContent orientation="horizontal">
//         <CircularProgress size="lg" determinate value={20}>
//           <SvgIcon>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
//               />
//             </svg>
//           </SvgIcon>
//         </CircularProgress>
//         <CardContent>
//           <Typography level="body-md">Gross profit</Typography>
//           <Typography level="h2">$ 432.6M</Typography>
//         </CardContent>
//       </CardContent>
//       <CardActions>
//         <Button variant="soft" size="sm">
//           Add to Watchlist
//         </Button>
//         <Button variant="solid" size="sm">
//           See breakdown
//         </Button>
//       </CardActions>
//     </Card>
//     </Grid>
//         <Grid>
//     <Card variant="solid" color="primary" invertedColors>
//       <CardContent orientation="horizontal">
//         <CircularProgress size="lg" determinate value={20}>
//           <SvgIcon>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
//               />
//             </svg>
//           </SvgIcon>
//         </CircularProgress>
//         <CardContent>
//           <Typography level="body-md">Gross profit</Typography>
//           <Typography level="h2">$ 432.6M</Typography>
//         </CardContent>
//       </CardContent>
//       <CardActions>
//         <Button variant="soft" size="sm">
//           Add to Watchlist
//         </Button>
//         <Button variant="solid" size="sm">
//           See breakdown
//         </Button>
//       </CardActions>
//     </Card>
//     </Grid>
//     </Grid>
//   );
// }



// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';

// export default function CardLayers3d() {
//   return (
   
//     <Box
//       sx={{
//         perspective: '1000px',
//         transition: 'transform 0.4s',
//         margin: '0 650px',
//         height: '400px', // Increase the height
//         width: '400px', // Increase the width
//         '& > div, & > div > div': {
//           transition: 'inherit',
//         },
//         '&:hover': {
//           '& > div': {
//             transform: 'rotateY(30deg)',
//             '& > div:nth-child(2)': {
//               transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
//             },
//             '& > div:nth-child(3)': {
//               transform: 'translate3d(45px, 50px, 40px)',
//             },
//           },
//         },
//       }}
//     >
//       <Card
//         variant="outlined"
//         sx={{
//           minHeight: '300px',
//           width: '350px',
//           backgroundColor: '#004d40',
//           borderColor: '#388e3c',
//         }}
//       >
//         <Typography level="h2" fontSize="lg" textColor="#000">
//         ABOUT US
//         </Typography>
//         <CardCover
//           sx={{
//             background:
//               'linear-gradient(to top, rgba(76, 175, 80, 0.9), rgba(76, 175, 80, 0.2) 200px), linear-gradient(to top, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0.2) 300px)',
//             border: '1px solid',
//             borderColor: '#388e3c',
//             backdropFilter: 'blur(1px)',
//           }}
//         >
//           <Typography level="h2" fontSize="lg" textColor="#fff">
//            ABOUT US
//           </Typography>
//         </CardCover>
//         <CardContent
//           sx={{
//             alignItems: 'self-end',
//             justifyContent: 'flex-end',
//             background: 'linear-gradient(to top, rgba(0, 77, 64, 0.6), rgba(0, 77, 64, 0.6))',
//             border: '1px solid',
//             borderColor: '#004d40',
//             backdropFilter: 'blur(1px)',
//           }}
//         >
//           <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
//           BOI Bank was originally promoted in 1994 by ICICI Limited, an Indian financial institution, and was its wholly-owned subsidiary.
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
   
   
//   );
// }



import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Aboutus() {
  return (
    <div>
    <Box
      sx={{
        perspective: '1000px',
        // Remove the transition property for transform in the hover state
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
      // Increase the height and width
      height="700px"
      width="700px"
      margin="0 800px"
    >
      <Card
        variant="outlined"
        sx={{
          // Increase the height and width of the card
          minHeight: '400px',
          width: '400px',
          margin: '50px 20px',
          backgroundColor: '#004d40', // Dark Green
          borderColor: '#388e3c', // Light Green
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#fff">
         <h2>WELCOME USER!!!</h2>
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(76, 175, 80, 0.9), rgba(76, 175, 80, 0.2) 200px), linear-gradient(to top, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0.2) 300px)',
            border: '1px solid',
            borderColor: '#388e3c', // Light Green
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            Card Cover
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0, 77, 64, 0.6), rgba(0, 77, 64, 0.6))', // Dark Green
            border: '1px solid',
            borderColor: '#004d40', // Dark Green
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
            *BOI Bank was originally promoted in 1994 by BOI Limited, an Indian financial institution, and was its wholly-owned subsidiary.
            *BOI Bank offers a wide range of banking products and financial services to corporate and retail customers through a variety of delivery channels and through its group companies.
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
   
    
  );
}

