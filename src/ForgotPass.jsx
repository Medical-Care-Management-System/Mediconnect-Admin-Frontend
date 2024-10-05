import React, { useState, useRef } from 'react';
import { TextField, Button, Container, Box, } from '@mui/material';

//import { useNavigate } from 'react-router-dom'; 


const ForgotPass = () => {
    const emailRef = useRef(null);
    const [email, setEmail] = useState('');
    const handleOTP=()=>{
        console.log("OTP send");

    };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="80%"
        height="70vh"
        sx={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
         <h2 className='text-xl font-sansmat font-semibold'>Forgot Password</h2>
      
        <TextField
          inputRef={emailRef}
          type='email'
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <Button
          variant="contained"
          color="primary"
          onClick={handleOTP}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Send OTP
        </Button>
      </Box>
    </Container>
  )
}

export default ForgotPass