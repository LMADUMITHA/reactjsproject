// import React, { useState } from 'react';
// import axios from 'axios';
// import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
// import LockIcon from '@mui/icons-material/Lock';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '50px auto' };
//   const avatarStyle = { backgroundColor: 'green' };

//   const handleLogin = async () => {
//     // Simple validation
//     if (!username.trim()) {
//       setUsernameError('Username is required');
//     } else {
//       setUsernameError('');
//     }

//     if (!password.trim()) {
//       setPasswordError('Password is required');
//     } else {
//       setPasswordError('');
//     }

//     // Perform login logic if validation passes
//     if (username.trim() && password.trim()) {
//       try {
//         // Make an HTTP POST request to your server endpoint for authentication
//         const response = await axios.post('/api/login', {
//           username,
//           password,
//         });

//         // Assuming your server returns a success message upon successful login
//         if (response.data.success) {
//           console.log('Login successful!');
//           // Redirect or perform any necessary actions after successful login
//         } else {
//           console.log('Login failed. Invalid credentials.');
//         }
//       } catch (error) {
//         console.error('Error during login:', error.message);
//       }
//     }
//   };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}><LockIcon /></Avatar>
//           <h2>SignIn</h2>
//         </Grid>
//         <TextField
//           fullWidth
//           label="Username"
//           placeholder='Enter your userName'
//           variant="standard"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           error={Boolean(usernameError)}
//           helperText={usernameError}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           placeholder='Enter your password'
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           error={Boolean(passwordError)}
//           helperText={passwordError}
//         />
//         <Checkbox
//           {...label}
//           defaultChecked
//           sx={{
//             color: pink[800],
//             '&.Mui-checked': {
//               color: pink[600],
//             },
//           }}
//         />
//         <label>Remember me</label>
//         <Button onClick={handleLogin} color='success' variant='contained' fullWidth>
//           Sign in
//         </Button>
//         <Link to='/forgotpassword'><h4>Forgot password?</h4></Link>
//         <Link to='/register' className='Link'><h4>Register</h4></Link>
//       </Paper>
//     </Grid>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
// import LockIcon from '@mui/icons-material/Lock';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
// import '../assets/styles/Login.css';
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/login', { username, password });
//       // Handle the successful login response
//       console.log(response.data);
//     } catch (error) {
//       // Handle login error
//       console.error('Login failed', error);
//     }
//   };

//   const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '50px auto' };
//   const avatarStyle = { backgroundColor: 'green' };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}><LockIcon /></Avatar>
//           <h2>SignIn</h2>
//         </Grid>
//         <TextField
//           fullWidth
//           label="Username"
//           placeholder='Enter your userName'
//           variant="standard"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           placeholder='Enter your password'
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Checkbox
//           defaultChecked
//           sx={{
//             color: pink[800],
//             '&.Mui-checked': {
//               color: pink[600],
//             },
//           }}
//         />
//         <label>Remember me</label>
//         <Link to='/aboutusmain' className='Link'>
//           <Button onClick={handleLogin} type='submit' color='success' variant='contained' fullWidth>
//             Sign in
//           </Button>
//         </Link>
//         <Link><h4>Forgot password?</h4></Link>
//         <Link to='/register' className='Link'><h4>Register</h4></Link>
//       </Paper>
//     </Grid>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
// import LockIcon from '@mui/icons-material/Lock';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
// import '../assets/styles/Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleLogin = async () => {
//     // Basic validation
//     const newErrors = {};

//     if (!username.trim()) {
//       newErrors.username = 'Username is required';
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       // If there are validation errors, update the state
//       setErrors(newErrors);
//       return; // Do not proceed with login if there are validation errors
//     }

//     try {
//       const response = await axios.post('/api/login', { username, password });
//       // Handle the successful login response
//       console.log(response.data);
//     } catch (error) {
//       // Handle login error
//       console.error('Login failed', error);
//     }
//   };

//   const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '50px auto' };
//   const avatarStyle = { backgroundColor: 'green' };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}><LockIcon /></Avatar>
//           <h2>SignIn</h2>
//         </Grid>
//         <TextField
//           fullWidth
//           label="Username"
//           placeholder='Enter your userName'
//           variant="standard"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             setErrors({ ...errors, username: '' }); // Clear the previous error for the field
//           }}
//           error={!!errors.username}
//           helperText={errors.username}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           placeholder='Enter your password'
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setErrors({ ...errors, password: '' }); // Clear the previous error for the field
//           }}
//           error={!!errors.password}
//           helperText={errors.password}
//         />
//         <Checkbox
//           defaultChecked
//           sx={{
//             color: pink[800],
//             '&.Mui-checked': {
//               color: pink[600],
//             },
//           }}
//         />
//         <label>Remember me</label>
//         <Link to='/aboutusmain' className='Link'>
//           <Button onClick={handleLogin} type='submit' color='success' variant='contained' fullWidth>
//             Sign in
//           </Button>
//         </Link>
//         <Link><h4>Forgot password?</h4></Link>
//         <Link to='/register' className='Link'><h4>Register</h4></Link>
//       </Paper>
//     </Grid>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import '../assets/styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    // Basic validation
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are validation errors, update the state
      setErrors(newErrors);
      return; // Do not proceed with login if there are validation errors
    }

    try {
      const response = await axios.post('/api/login', { username, password });
      // Handle the successful login response
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  };

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '50px auto' };
  const avatarStyle = { backgroundColor: 'green' };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockIcon /></Avatar>
          <h2>SignIn</h2>
        </Grid>
        <TextField
          fullWidth
          label="Username"
          placeholder='Enter your userName'
          variant="standard"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors({ ...errors, username: '' }); // Clear the previous error for the field
          }}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          fullWidth
          label="Password"
          placeholder='Enter your password'
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: '' }); // Clear the previous error for the field
          }}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Checkbox
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
        <label>Remember me</label>
        <Link to='/aboutusmain' className='Link'>
          <Button onClick={handleLogin} type='submit' color='success' variant='contained' fullWidth>
            Sign in
          </Button>
        </Link>
        <Link><h4>Forgot password?</h4></Link>
        <Link to='/register' className='Link'><h4>Register</h4></Link>
      </Paper>
    </Grid>
  );
};

export default Login;
