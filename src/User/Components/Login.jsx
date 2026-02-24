import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Header from './Header'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Contextprovider'
import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'



export default function Login() {
const nav=useNavigate();
  const{host} = useContext(UserContext)

  const [login,setLogin]=useState({
  email:'',
  password:''
})

 const handlechange=((e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  })

  const handleSubmit= (e)=> {
  e.preventDefault();

     axios.post(`${host}/users/userlogin`,login)
    
    .then((res)=>{
      console.log(res);
      if(res.data.success){
        localStorage.setItem("userToken",JSON.stringify(res.data.userToken))
        alert("LOGIN SUCCESSFULL");
        nav('/');
      }else{
        alert("Please enter valid details")
      }
    })
    
   .catch ((error)=> {
    console.log(error);
    alert("ERROR OCCURED DURING LOGIN")
  })
}

  return (

    <div>
       {/* <Header/> */}
       <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* REGISTER CARD */}
      <Box
        sx={{
          width: 450,
          p: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          boxShadow: 12,
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={1}
        >
          Login/SignIn
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Join ShopSmart®️ and explore amazing products
        </Typography>

 <TextField
        fullWidth
        onChange={handlechange}
        id='email'
        label='E-mail'
        name='email'
        value={login.email}
        type='email'
        margin='normal'
        />

        <TextField
        fullWidth
        onChange={handlechange}
        id='pass'
        label='Password'
        name='password'
        value={login.password}
        type='password'
        margin='normal'
        />

     {/* BUTTON */}
        <Button 
      onClick={handleSubmit}
          fullWidth
          sx={{
            mt: 4,
            py: 1.4,
            borderRadius: 3,
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #7b2ff7, #9f44d3)',
            boxShadow: '0 8px 25px rgba(123,47,247,0.4)',
            '&:hover': {
              background: 'linear-gradient(160deg, #49d088ff, #7b2ff7)',
              boxShadow: '0 12px 35px rgba(83, 72, 171, 0.6)',
            },
          }}
        >
          LOGIN
        </Button>
        <Typography>Don't have an account?{''}<Link to="/reg">SIGNUP/REGISTER</Link></Typography>
    </Box>
    </Box>
    {/* <Footer/> */}
    </div>
  )
}
