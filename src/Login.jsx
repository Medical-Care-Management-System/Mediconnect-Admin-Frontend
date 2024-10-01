import React, { useState, useRef } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const emailRef = useRef(null);  
  const passwordRef = useRef(null);  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (!email) {
      emailRef.current.focus();  
      return;
    }
    if (!password) {
      passwordRef.current.focus(); 
      return;
    }

    console.log('Email:', email, 'Password:', password);

    // Here, you would typically validate the email and password
    // If login is successful, navigate to the main page
    navigate('/main'); // Navigate to Main component
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
        width='80%'
        height='70vh'
        sx={{
          border: '1px solid #ccc', 
          padding: '20px',          
          borderRadius: '8px',       
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 className='text-3xl font-sansmat font-semibold'>MediConnect</h2>
        <h2 className='text-xl font-sansmat font-semibold'>Admin</h2>
        <Stack>
          <Avatar
            alt="logo"
            src="/logo.jpg"
            sx={{ width: 200, height: 200, border: '1px solid #ccc' }}
          />
        </Stack>

        <TextField
          inputRef={emailRef}  
          type='Email'
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          inputRef={passwordRef}  
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
