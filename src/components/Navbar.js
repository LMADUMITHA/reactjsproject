import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'
import Home from './Home';
import Login from './Login';
import Register from './Register';

import Footer from './Footer';
import Aboutusmain from './Aboutusmain';
import Schemes from './Schemes';
function Navbar(){
    return(
        
        <BrowserRouter>
            <nav>
                <ul>
                    {/* <li className='active'>
                        <Link to='/' className='Link'>HOME</Link>
                    </li> */}
                    <Link to='/' style={{ color: '#ffffff', textDecoration: 'none' }} className='Link'>
    HOME
</Link>
                    <li className='actives'>
                        <Link to='/login'  style={{ color: '#ffffff', textDecoration: 'none' }} className='Link'>LOGIN</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/register'  style={{ color: '#ffffff', textDecoration: 'none' }} className='Link'>REGISTER</Link>
                    </li>
                    <li className='activesss'>
                        <Link to='/aboutusmain'  style={{ color: '#ffffff', textDecoration: 'none' }} className='Link'>ABOUT US</Link>
                    </li>
                    <li className='activesssS'>
                        <Link to='/footer'  style={{ color: '#ffffff', textDecoration: 'none' }} className='Link'>CONTACT US</Link>
                    </li>
                    
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/aboutusmain' element={<Aboutusmain/>}/>
                <Route exact path='/schemes' element={<Schemes/>}/>
                <Route exact path='/footer' element={<Footer/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;