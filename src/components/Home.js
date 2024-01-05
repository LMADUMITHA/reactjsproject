

import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import Footer from "./Footer";
import Image from "./Image";
import Islider from "./Islider";
import '../assets/styles/Home.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {Grid, Avatar} from  '@mui/material'

const avatarStyle={backgroundColor:'green'}

function Home(){
   return(

    <div>
         <Grid >
                <Grid align='center'>
                <Avatar style={avatarStyle}><AccountBalanceIcon /></Avatar>
            <h2>BOI BANK</h2>
            </Grid>
            </Grid>
        {/* <Image /> */}
        <Islider />
        <Cards1 />
        <Cards2 />
        {/* <Islider /> */}
        <Footer />
    </div> 
    
   )
}
export default Home;