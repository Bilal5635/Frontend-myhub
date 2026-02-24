import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { UserContext } from '../../Contextprovider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UserProfile() {

const {host}= useContext(UserContext)
const nav=useNavigate({});
const [profile, setProfile] = useState({});

useEffect(()=>{
    if (localStorage.getItem('userToken')==null){
        nav('/login');
    }
},[nav]);

useEffect(() => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    if (token) {
        axios.get(`${host}/users/getprofile`, {
            headers: { "auth-token": token }
        })
        .then((res) => {
            setProfile(res.data.data);
        })
        .catch((err) => console.log(err));
    }
}, [host]);

const handlechange = (e)=>{
    setProfile({...profile,[e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
    e.preventDefault();
    const token =JSON.parse(localStorage.getItem('userToken'))
    axios.put(`${host}/users/updateprofile`,profile,{
        headers:{"auth-token":token,

        },
    })
    .then((res)=>{
        alert("Profile updated successfully");
        setProfile(res.data.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err.response?.data?.message);
    });
};
console.log(profile,"profile")


  return (
    <div>
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
          UPDATE PROFILE
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          ShopSmart®️ and explore amazing products
        </Typography>

        {/* INPUTS */}
      {/* TextField HERE*/}
        <TextField
        fullWidth
        onChange={handlechange}
        id='name'
        label='Name'
        name='name'
        value={profile.name}
        margin='normal'
        />
        <TextField
        fullWidth
        onChange={handlechange}
        id='email'
        label='E-mail'
        name='email'
        value={profile.email}
        type='email'
        margin='normal'
        />

        

        <TextField
        fullWidth
        onChange={handlechange}
        id='phone'
        label='Mobile'
        name='phone'
        value={profile.phone}
        type='tel'
        margin='normal'
        />
      
      <TextField
        fullWidth
        onChange={handlechange}
        id='place'
        label='Region'
        name='address'
        value={profile.address}
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
          SUBMIT
        </Button>

      </Box>
    </Box>
    </div>
  )
}
