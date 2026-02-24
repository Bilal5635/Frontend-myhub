import React, { useState } from 'react'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserContext } from '../../Contextprovider'
import { useContext } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'


export default function Register() {

  const{host} = useContext(UserContext)
  const nav=useNavigate()

  const[form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  })
  
  const handlechange=((e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  })

const handleSubmit=async (e)=> {
  e.preventDefault();
  try {
    await axios.post(`${host}/users/adduser`,form);
    alert("REGISTEREDD SUCCESSFULLTY");
    nav('/Login');
  } catch (error) {
    console.log(error);
    alert("ERROR OCCURED DURING REGISTRATION")
  }
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
          Create Account
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Join ShopSmart®️ and explore amazing products
        </Typography>

        {/* INPUTS */}
      {/* TextField HERE*/}
        <TextField
        fullWidth
        onChange={handlechange}
        id='name'
        label='Name'
        name='name'
        value={form.name}
        margin='normal'
        />
        <TextField
        fullWidth
        onChange={handlechange}
        id='email'
        label='E-mail'
        name='email'
        value={form.email}
        type='email'
        margin='normal'
        />

        <TextField
        fullWidth
        onChange={handlechange}
        id='pass'
        label='Password'
        name='password'
        value={form.password}
        type='password'
        margin='normal'
        />

        <TextField
        fullWidth
        onChange={handlechange}
        id='phone'
        label='Mobile'
        name='phone'
        value={form.phone}
        type='tel'
        margin='normal'
        />
      
      <TextField
        fullWidth
        onChange={handlechange}
        id='place'
        label='Region'
        name='address'
        value={form.address}
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
              background: 'linear-gradient(135deg, #9f44d3, #7b2ff7)',
              boxShadow: '0 12px 35px rgba(123,47,247,0.6)',
            },
          }}
        >
          Register
        </Button>
              <Typography>Already have an account?{''}<Link to="/login">LOGIN/SIGNIN</Link></Typography>

      </Box>
    </Box>
    </div>
  )
}
