// import React from "react";
// import '../assets/styles/Footer.css'

// const Footer = (props) => {
//     return <footer className="footer">
//     <div className="container">
//         <div className="row">
//             <div className="footer-col">
//                 <h4>company</h4>
//                 <ul>
//                     <li><a href="#">about us</a></li>
//                     <li><a href="#">our services</a></li>
//                     <li><a href="#">privacy policy</a></li>
//                     <li><a href="#">affiliate program</a></li>
//                 </ul>
//             </div>
//             <div className="footer-col">
//                 <h4>get help</h4>
//                 <ul>
//                     <li><a href="#">FAQ</a></li>
//                     <li><a href="#">shipping</a></li>
//                     <li><a href="#">returns</a></li>
//                     <li><a href="#">order status</a></li>
//                     <li><a href="#">payment options</a></li>
//                 </ul>
//             </div>
//             <div className="footer-col">
//                 <h4>follow us</h4>
//                 <div className="social-links">
//                     <a href="#"><i class="fab fa-facebook-f"></i></a>
//                     <a href="#"><i class="fab fa-twitter"></i></a>
//                     <a href="#"><i class="fab fa-instagram"></i></a>
//                     <a href="#"><i class="fab fa-linkedin-in"></i></a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </footer>
// }

// export default Footer;



import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      // sx={{
      //   backgroundColor: (theme) =>
      //     theme.palette.mode === "light"
      //       ? theme.palette.grey[200]
      //       : theme.palette.grey[800],
      //   p: 6,
      // }}
      sx={{
        backgroundColor: "#000000", // Set the background color to black
        p: 6,
        color: "#ffffff", // Set the text color to white
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              {/* We are XYZ company, dedicated to providing the best service to our
              customers. */}
              
          <ul>
         <li>Awards & Recognition</li>
         <li>Media Center</li>
       <li>Career Opportunities</li>
         <li>Achievements</li>
         <li>Queries</li>
       <li>Credit cards and debits cards </li>
        </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Tools and Management
            </Typography>
            <Typography variant="body2" color="white">
              {/* We are XYZ company, dedicated to providing the best service to our
              customers. */}
              <ul>
           <li>  Fixed Deposit EMI Calculator</li>
<li>Personal Loan EMI Calculator</li>
<li>Home Loan EMI Calculator</li>
<li>Car Loan EMI Calculator</li>
<li>Mutual Fund Calculator</li>
<li>SIP Calculator</li>
<li>Education Loan Calculator</li>
<li>Retirement Calculator</li>
</ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
             Popular products and services.
             </Typography>
             <Typography  variant="body2" color="white">
            <ul>

<li>Savings Account</li>
<li>Current Account</li>
<li>Fixed Deposit</li>
<li>Money Transfer</li>
<li>Credit Cards</li>
<li>Personal Loan</li>
<li>Home Loan</li>
<li>Car Loan</li>
<li>Car Loan</li>
<li>Mutual Fund</li>
<li>Debt Management Services</li>
</ul>
            </Typography>
            <Typography variant="body2" color="white">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}