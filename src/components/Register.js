// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import {
// //   Grid,
// //   Paper,
// //   Avatar,
// //   Typography,
// //   TextField,
// //   Button,
// //   FormControl,
// //   FormControlLabel,
// //   Radio,
// //   RadioGroup,
// //   Checkbox,
// // } from '@mui/material';
// // import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// // import { useNavigate } from 'react-router-dom';

// // const Register = () => {
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     gender: 'female',
// //     phoneNumber: '',
// //     password: '',
// //     confirmPassword: '',
// //     acceptTerms: false,
// //   });

// //   const [formErrors, setFormErrors] = useState({
// //     name: '',
// //     email: '',
// //     phoneNumber: '',
// //     password: '',
// //     confirmPassword: '',
// //     acceptTerms: '',
// //   });

// //   const paperStyle = { padding: '30px 20px', width: 300, margin: '50px auto' };
// //   const avatarStyle = { backgroundColor: 'green' };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleCheckboxChange = (e) => {
// //     setFormData({ ...formData, acceptTerms: e.target.checked });
// //   };

// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     // Validation code
// //     const errors = {};
// //     for (const key in formData) {
// //       if (!formData[key] && key !== 'acceptTerms') {
// //         errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
// //       } else {
// //         errors[key] = '';
// //       }
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       errors.confirmPassword = 'Passwords do not match';
// //     }

// //     setFormErrors(errors);

// //     // Submit if no errors
// //     if (Object.values(errors).every((error) => !error)) {
// //       try {
// //         const response = await axios.post('http://localhost:3001/users', formData);
// //         console.log('Signup successful:', response.data);
// //         navigate('/login');
// //       } catch (error) {
// //         console.error('Signup failed:', error.response.data);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="title">
// //       <Grid>
// //         <Paper elevation={20} style={paperStyle}>
// //           <Grid align='center'>
// //             <Avatar style={avatarStyle}>
// //               <AccountBalanceIcon />
// //             </Avatar>
// //             <h2>Signup!!!</h2>
// //             <Typography variant='captain'>Please fill this form to create an account!</Typography>
// //           </Grid>
// //           <form onSubmit={handleSignup}>
// //           <TextField
// //               fullWidth
// //               label="Name"
// //               placeholder='Enter your name'
// //               variant="standard"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               error={Boolean(nameError)}
// //               helperText={nameError}
// //             />
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               type='email'
// //               placeholder='Enter your Email'
// //               variant="standard"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               error={Boolean(emailError)}
// //               helperText={emailError}
// //             />
// //             <FormControl component="fieldset" style={marginTop}>
// //               <FormLabel id="demo-radio-buttons-group-label" align='left corner'>Gender</FormLabel>
// //               <RadioGroup
// //                 aria-labelledby="demo-radio-buttons-group-label"
// //                 value={gender}
// //                 onChange={(e) => setGender(e.target.value)}
// //                 style={{ display: 'initial' }}
// //               >
// //                 <FormControlLabel value="female" control={<Radio />} label="Female" />
// //                 <FormControlLabel value="male" control={<Radio />} label="Male" />
// //                 <FormControlLabel value="other" control={<Radio />} label="Other" />
// //               </RadioGroup>
// //             </FormControl>
// //             <TextField
// //               fullWidth
// //               label="Phone Number"
// //               placeholder='Enter your phone number'
// //               variant="standard"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               error={Boolean(phoneNumberError)}
// //               helperText={phoneNumberError}
// //             />
// //             <TextField
// //               fullWidth
// //               label="Password"
// //               placeholder='Enter your password'
// //               type="password"
// //               autoComplete="current-password"
// //               variant="standard"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               error={Boolean(passwordError)}
// //               helperText={passwordError}
// //             />
// //             <TextField
// //               fullWidth
// //               label="Confirm password"
// //               placeholder='Enter your confirm password'
// //               type="password"
// //               autoComplete="current-password"
// //               variant="standard"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               error={Boolean(confirmPasswordError)}
// //               helperText={confirmPasswordError}
// //             />
// //             {Object.keys(formData).map((key) => (
// //               <TextField
// //                 key={key}
// //                 fullWidth
// //                 label={key.charAt(0).toUpperCase() + key.slice(1)}
// //                 placeholder={`Enter your ${key}`}
// //                 variant="standard"
// //                 type={key.includes('password') ? 'password' : 'text'}
// //                 value={formData[key]}
// //                 onChange={handleInputChange}
// //                 error={Boolean(formErrors[key])}
// //                 helperText={formErrors[key]}
// //                 inputProps={{ 'aria-label': key }}
// //                 {...(key === 'acceptTerms' && { onChange: handleCheckboxChange })}
// //               />
// //             ))}
// //             <Checkbox
// //               checked={formData.acceptTerms}
// //               onChange={handleCheckboxChange}
// //               color="success"
// //               inputProps={{ 'aria-label': 'Accept terms and conditions' }}
// //             />
// //             <label htmlFor="acceptTerms">I accept all terms and conditions</label>
// //             <Button type='submit' variant='contained' color='success'>
// //               Signup
// //             </Button>
// //           </form>
// //         </Paper>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Register;





// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Typography, Button } from '@mui/material';
// // import '../assets/styles/Register.css'
// // const CustomPopup = ({ message, onClose }) => (
// //   <div className="popup">
// //     <Typography color="error" variant="caption">
// //       {message}
// //     </Typography>
// //     <Button onClick={onClose} variant="outlined">
// //       Close
// //     </Button>
// //   </div>
// // );

// // function Register() {
// //   const [formData, setFormData] = useState({
// //     user: '',
// //     dob: '',
// //     email: '',
// //     password: '',
// //     contactNumber: '',
// //   });

// //   const [showPopup, setShowPopup] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const closePopup = () => {
// //     setShowPopup(false);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Basic validation
// //     if (Object.values(formData).some((value) => value === '')) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     // Additional validation for contact number
// //     if (!/^\d{10}$/.test(formData.contactNumber)) {
// //       alert('Please enter a valid 10-digit contact number');
// //       return;
// //     }

// //     try {
// //       // Make a POST request to the JSON Server for registration
// //       await axios.post('http://localhost:3001/users', formData);

// //       console.log('Registration successful:', formData);

// //       // Navigate to the login page after successful registration
// //       window.location.href = '/login';
// //     } catch (error) {
// //       console.error('Registration failed:', error.message);
// //       setShowPopup(true);
// //     }
// //   };

// //   return (
// //     <div className='regimage'>
// //       <div className='reg'>
// //         <center>
// //           <h1>SIGN UP</h1>
// //         </center>
// //         <form onSubmit={handleSubmit}>
// //           <fieldset>
// //             <legend>User Information</legend>

// //             <label htmlFor="user">Full Name:</label>
// //             <input
// //               type="text"
// //               id="user"
// //               name="user"
// //               placeholder="Enter your full name"
// //               value={formData.user}
// //               onChange={handleChange}
// //               required
// //             />
// //             <br />

// //             <label htmlFor="dob">Date of Birth:</label>
// //             <input
// //               type="date"
// //               id="dob"
// //               name="dob"
// //               value={formData.dob}
// //               onChange={handleChange}
// //               required
// //             />
// //             <br />

// //             <label htmlFor="email">E-mail:</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               placeholder="Enter your email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //             <br />

// //             <label htmlFor="password">Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               placeholder="Enter your password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //             <br />

// //             <label htmlFor="contactNumber">Contact Number:</label>
// //             <input
// //               type="tel"
// //               id="contactNumber"
// //               name="contactNumber"
// //               placeholder="Enter your phone number"
// //               value={formData.contactNumber}
// //               onChange={handleChange}
// //               pattern="[0-9]{10}"
// //               required
// //             />
// //             <br />

// //             <center>
// //               <button type="submit" className='rep2'>SIGN UP</button>
// //             </center>
// //           </fieldset>
// //         </form>

// //         {/* Display popup if showPopup is true */}
// //         {/* {showPopup && <CustomPopup message="Registration failed" onClose={closePopup} />} */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
// // import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// // import { pink } from '@mui/material/colors';
// // import Checkbox from '@mui/material/Checkbox';

// // const Register = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [gender, setGender] = useState('female');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [acceptTerms, setAcceptTerms] = useState(false);

// //   const handleRegister = async () => {
// //     try {
// //       const response = await axios.post('/api/register', {
// //         name,
// //         email,
// //         gender,
// //         phoneNumber,
// //         password,
// //         confirmPassword,
// //         acceptTerms,
// //       });
// //       // Handle the successful registration response
// //       console.log(response.data);
// //     } catch (error) {
// //       // Handle registration error
// //       console.error('Registration failed', error);
// //     }
// //   };

// //   const paperStyle = { padding: '30px 20px', width: 300, margin: '50px auto' };
// //   const avatarStyle = { backgroundColor: 'green' };
// //   const marginTop = { marginTop: 5 };

// //   return (
// //     <div className="title">
// //       <Grid>
// //         <Paper elevation={20} style={paperStyle}>
// //           <Grid align='center'>
// //             <Avatar style={avatarStyle}>
// //               <AccountBalanceIcon />
// //             </Avatar>
// //             <h2 style={{ margin: 0 }}>Signup!!!</h2>
// //             <Typography variant='captain'>Please fill this form to create an account!</Typography>
// //           </Grid>
// //           <form>
// //             <TextField
// //               fullWidth
// //               label="Name"
// //               placeholder='Enter your name'
// //               variant="standard"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               placeholder='Enter your Email'
// //               variant="standard"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             {/* ... other fields */}
// //             <Checkbox
// //               defaultChecked
// //               sx={{
// //                 color: pink[800],
// //                 '&.Mui-checked': {
// //                   color: pink[600],
// //                 },
// //               }}
// //               onChange={(e) => setAcceptTerms(e.target.checked)}
// //             />
// //             <label>I accept all terms and conditions</label>
// //             <Button onClick={handleRegister} type='submit' variant='contained' color='success'>
// //               Signup
// //             </Button>
// //           </form>
// //         </Paper>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Register;




// // import {Grid, Paper, Avatar, Typography, TextField, Button}  from '@mui/material'
// // import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// // import Radio from '@mui/material/Radio';
// // import RadioGroup from '@mui/material/RadioGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormControl from '@mui/material/FormControl';
// // import FormLabel from '@mui/material/FormLabel';
// // import { pink } from '@mui/material/colors';
// // import Checkbox from '@mui/material/Checkbox';

// // const Register=()=>{
// // const paperStyle={padding:'30px 20px', width:300, margin:"50px auto"}
// // const headerStyle={margin:0}
// // const avatarStyle={backgroundColor:'green'}
// // const marginTop={marginTop:5}
// // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// //     return(
// //         <div className="title">
// //        <Grid>
// //         <Paper elevation={20} style={paperStyle} >
// //             <Grid align='center'>
// //                 <Avatar style={avatarStyle}>
// //                 <AccountBalanceIcon />
// //                 </Avatar>
// //                 <h2 style={headerStyle}>Signup!!!</h2>
// //                 <Typography variant='captain'>Please fill this form to create an account!</Typography>
// //             </Grid>
// //             <form>
// //             <TextField fullWidth
// //           id="standard-multiline-flexible"
// //           label="Name"
// //           placeholder='Enter your name'
// //           multiline
// //           maxRows={4}
// //           variant="standard"
// //         />
// //          <TextField fullWidth
// //           id="standard-multiline-flexible"
// //           label="Email"
// //           placeholder='Enter your Email'
// //           multiline
// //           maxRows={4}
// //           variant="standard"
// //         />
// //         <FormControl component="fieldset" style={marginTop}>
// //   <FormLabel id="demo-radio-buttons-group-label" align='left corner'>Gender</FormLabel>
// //   <RadioGroup
// //     aria-labelledby="demo-radio-buttons-group-label"
// //     defaultValue="female"
// //     name="radio-buttons-group"
// //     style={{display:'initial'}}
// //   >
// //     <FormControlLabel value="female" control={<Radio />} label="Female" />
// //     <FormControlLabel value="male" control={<Radio />} label="Male" />
// //     <FormControlLabel value="other" control={<Radio />} label="Other" />
// //   </RadioGroup>
// // </FormControl>
// //          <TextField fullWidth
// //           id="standard-multiline-flexible"
// //           label="Phone Number"
// //           placeholder='Enter your phone number'
// //           multiline
// //           maxRows={4}
// //           variant="standard"
// //         />
         
// //          <TextField fullWidth
// //           id="standard-password-input"
// //           label="Password"
// //           placeholder='Enter your password'
// //           type="password"
// //           autoComplete="current-password"
// //           variant="standard"
// //         />
// //          <TextField fullWidth
// //           id="standard-password-input"
// //           label="Confirm password"
// //           placeholder='Enter your confirm password'
// //           type="password"
// //           autoComplete="current-password"
// //           variant="standard"
// //         />
         
// //         <Checkbox
// //         {...label}
// //         defaultChecked
// //         sx={{
// //           color: pink[800],
// //           '&.Mui-checked': {
// //             color: pink[600],
            
// //           },
// //         }}
        
// //       />
// //        <label>I accept all terms and conditions</label>
        
// //         <Button type='submit' variant='contained' color='success'>Signup</Button>
// //             </form>
            
// //         </Paper>
// //        </Grid>
// //        </div>
// //     )
// // }
// // export default Register;


// // import React, { useState } from 'react';
// // import {
// //   Grid,
// //   Paper,
// //   Avatar,
// //   Typography,
// //   TextField,
// //   Button,
// // } from '@mui/material';
// // import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// // import Radio from '@mui/material/Radio';
// // import RadioGroup from '@mui/material/RadioGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormControl from '@mui/material/FormControl';
// // import FormLabel from '@mui/material/FormLabel';
// // import { pink } from '@mui/material/colors';
// // import Checkbox from '@mui/material/Checkbox';

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     gender: 'female',
// //     phoneNumber: '',
// //     password: '',
// //     confirmPassword: '',
// //     termsAccepted: false,
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     setErrors({ ...errors, [name]: '' }); // Clear the previous error for the field
// //   };

// //   const handleCheckboxChange = (e) => {
// //     setFormData({ ...formData, termsAccepted: e.target.checked });
// //     setErrors({ ...errors, termsAccepted: '' }); // Clear the previous error for the checkbox
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Basic validation
// //     const newErrors = {};

// //     if (!formData.name.trim()) {
// //       newErrors.name = 'Name is required';
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Invalid email address';
// //     }

// //     if (!formData.password.trim()) {
// //       newErrors.password = 'Password is required';
// //     } else if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }

// //     if (!formData.termsAccepted) {
// //       newErrors.termsAccepted = 'You must accept the terms and conditions';
// //     }

// //     if (Object.keys(newErrors).length > 0) {
// //       // If there are validation errors, update the state
// //       setErrors(newErrors);
// //     } else {
// //       // If no validation errors, submit the form (you can handle this part as needed)
// //       console.log('Form submitted:', formData);
// //     }
// //   };

// //   const paperStyle = { padding: '30px 20px', width: 300, margin: '50px auto' };
// //   const headerStyle = { margin: 0 };
// //   const avatarStyle = { backgroundColor: 'green' };
// //   const marginTop = { marginTop: 5 };
// //   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// //   return (
// //     <div className="title">
// //       <Grid>
// //         <Paper elevation={20} style={paperStyle}>
// //           <Grid align="center">
// //             <Avatar style={avatarStyle}>
// //               <AccountBalanceIcon />
// //             </Avatar>
// //             <h2 style={headerStyle}>Signup!!!</h2>
// //             <Typography variant="captain">
// //               Please fill this form to create an account!
// //             </Typography>
// //           </Grid>
// //           <form onSubmit={handleSubmit}>
// //             <TextField
// //               fullWidth
// //               id="name"
// //               name="name"
// //               label="Name"
// //               placeholder="Enter your name"
// //               variant="standard"
// //               value={formData.name}
// //               onChange={handleInputChange}
// //               error={!!errors.name}
// //               helperText={errors.name}
// //             />
// //             <TextField
// //               fullWidth
// //               id="email"
// //               name="email"
// //               label="Email"
// //               placeholder="Enter your Email"
// //               variant="standard"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               error={!!errors.email}
// //               helperText={errors.email}
// //             />
// //             <FormControl component="fieldset" style={marginTop}>
// //               <FormLabel id="demo-radio-buttons-group-label" align="left corner">
// //                 Gender
// //               </FormLabel>
// //               <RadioGroup
// //                 aria-labelledby="demo-radio-buttons-group-label"
// //                 value={formData.gender}
// //                 name="gender"
// //                 onChange={handleInputChange}
// //                 style={{ display: 'initial' }}
// //               >
// //                 <FormControlLabel value="female" control={<Radio />} label="Female" />
// //                 <FormControlLabel value="male" control={<Radio />} label="Male" />
// //                 <FormControlLabel value="other" control={<Radio />} label="Other" />
// //               </RadioGroup>
// //             </FormControl>
// //             <TextField
// //               fullWidth
// //               id="phoneNumber"
// //               name="phoneNumber"
// //               label="Phone Number"
// //               placeholder="Enter your phone number"
// //               variant="standard"
// //               value={formData.phoneNumber}
// //               onChange={handleInputChange}
// //             />
// //             <TextField
// //               fullWidth
// //               id="password"
// //               name="password"
// //               label="Password"
// //               placeholder="Enter your password"
// //               type="password"
// //               autoComplete="current-password"
// //               variant="standard"
// //               value={formData.password}
// //               onChange={handleInputChange}
// //               error={!!errors.password}
// //               helperText={errors.password}
// //             />
// //             <TextField
// //               fullWidth
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               label="Confirm password"
// //               placeholder="Enter your confirm password"
// //               type="password"
// //               autoComplete="current-password"
// //               variant="standard"
// //               value={formData.confirmPassword}
// //               onChange={handleInputChange}
// //               error={!!errors.confirmPassword}
// //               helperText={errors.confirmPassword}
// //             />
// //             <Checkbox
// //               {...label}
// //               checked={formData.termsAccepted}
// //               onChange={handleCheckboxChange}
// //               sx={{
// //                 color: pink[800],
// //                 '&.Mui-checked': {
// //                   color: pink[600],
// //                 },
// //               }}
// //             />
// //             <label>I accept all terms and conditions</label>
// //             <Button type="submit" variant="contained" color="success">
// //               Signup
// //             </Button>
// //           </form>
// //         </Paper>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Register;


// // Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     gender: 'female',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear the previous error for the field
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({ ...formData, termsAccepted: e.target.checked });
//     setErrors({ ...errors, termsAccepted: '' }); // Clear the previous error for the checkbox
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.termsAccepted) {
//       newErrors.termsAccepted = 'You must accept the terms and conditions';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       // If there are validation errors, update the state
//       setErrors(newErrors);
//     } else {
//       // If no validation errors, send data to JSON Server
//       try {
//         const response = await axios.post('http://localhost:3002/users', formData);
//         console.log('User data stored in db.json:', response.data);

//         // Clear the form and state after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           gender: 'female',
//           phoneNumber: '',
//           password: '',
//           confirmPassword: '',
//           termsAccepted: false,
//         });
//         setErrors({});
//       } catch (error) {
//         console.error('Failed to store user data in db.json', error.response.data);
//       }
//     }
//   };

//   const paperStyle = { padding: '30px 20px', width: 300, margin: '50px auto' };
//   const headerStyle = { margin: 0 };
//   const avatarStyle = { backgroundColor: 'green' };
//   const marginTop = { marginTop: 5 };
//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//   return (
//     <div className="title">
//       <Grid>
//         <Paper elevation={20} style={paperStyle}>
//           <Grid align="center">
//             <Avatar style={avatarStyle}>
//               <AccountBalanceIcon />
//             </Avatar>
//             <h2 style={headerStyle}>Signup!!!</h2>
//             <Typography variant="caption">
//               Please fill this form to create an account!
//             </Typography>
//           </Grid>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               placeholder="Enter your name"
//               variant="standard"
//               value={formData.name}
//               onChange={handleInputChange}
//               error={!!errors.name}
//               helperText={errors.name}
//             />
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               placeholder="Enter your Email"
//               variant="standard"
//               value={formData.email}
//               onChange={handleInputChange}
//               error={!!errors.email}
//               helperText={errors.email}
//             />
//             <FormControl component="fieldset" style={marginTop}>
//               <FormLabel id="demo-radio-buttons-group-label" align="left corner">
//                 Gender
//               </FormLabel>
//               <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 value={formData.gender}
//                 name="gender"
//                 onChange={handleInputChange}
//                 style={{ display: 'initial' }}
//               >
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//               </RadioGroup>
//             </FormControl>
//             <TextField
//               fullWidth
//               id="phoneNumber"
//               name="phoneNumber"
//               label="Phone Number"
//               placeholder="Enter your phone number"
//               variant="standard"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//             />
//             <TextField
//               fullWidth
//               id="password"
//               name="password"
//               label="Password"
//               placeholder="Enter your password"
//               type="password"
//               autoComplete="current-password"
//               variant="standard"
//               value={formData.password}
//               onChange={handleInputChange}
//               error={!!errors.password}
//               helperText={errors.password}
//             />
//             <TextField
//               fullWidth
//               id="confirmPassword"
//               name="confirmPassword"
//               label="Confirm password"
//               placeholder="Enter your confirm password"
//               type="password"
//               autoComplete="current-password"
//               variant="standard"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               error={!!errors.confirmPassword}
//               helperText={errors.confirmPassword}
//             />
//             <Checkbox
//               {...label}
//               checked={formData.termsAccepted}
//               onChange={handleCheckboxChange}
//               sx={{
//                 color: pink[800],
//                 '&.Mui-checked': {
//                   color: pink[600],
//                 },
//               }}
//             />
//             <label>I accept all terms and conditions</label>
//             <Button type="submit" variant="contained" color="success">
//               Signup
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'female',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
    setErrors({ ...errors, termsAccepted: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/users', formData);

        if (response) {
          console.log('User data stored in db.json:', response.data);

          // Redirect to the login page after successful registration
          navigate('/login');
        } else {
          console.error('Invalid response from the server:', response);
        }
      } catch (error) {
        console.error('Failed to store user data in db.json', error.message);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const paperStyle = { padding: '30px 20px', width: 300, margin: '50px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: 'green' };
  const marginTop = { marginTop: 5 };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="title">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountBalanceIcon />
            </Avatar>
            <h2 style={headerStyle}>Signup!!!</h2>
            <Typography variant="caption">
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              placeholder="Enter your name"
              variant="standard"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your Email"
              variant="standard"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel id="demo-radio-buttons-group-label" align="left corner">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={formData.gender}
                name="gender"
                onChange={handleInputChange}
                style={{ display: 'initial' }}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
              variant="standard"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              placeholder="Enter your confirm password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Checkbox
              {...label}
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
            <label>I accept all terms and conditions</label>
            <Button type="submit" variant="contained" color="primary" disabled={submitting}>
              Signup
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
