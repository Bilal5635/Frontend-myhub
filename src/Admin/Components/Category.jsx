import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserContext } from '../../Contextprovider'
import { useContext } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Category() {


const{host} = useContext(UserContext)
  const nav=useNavigate()

  const[cat,setCat]=useState({
    name:'',
    Description:''
    
  })
  
  const handleChange=((e)=>{
    setCat({...cat,[e.target.name]:e.target.value})
  })

const handleSubmit=async (e)=> {
  e.preventDefault();
  try {
    await axios.post(`${host}/category/addcat`,cat);
    alert("ADDED SUCCESSFULLTY");
    nav('/admin/viewcat');
  } catch (error) {
    console.log(error);
    alert("ERROR OCCURED DURING ADDING CATEGORY")
  }
}

console.log(cat,"cat")

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
          ADD ITEMS
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          ShopSmart®️ products
        </Typography>

 <TextField
          fullWidth
          label="Category Name"
          name="name"
          value={cat.category}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Description"
          name="Description"
          value={cat.Description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={2}
        />

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
              background: 'linear-gradient(160deg, #49d088, #7b2ff7)',
              boxShadow: '0 12px 35px rgba(83, 72, 171, 0.6)',
            },
          }}
        >
          ADD CATEGORY
        </Button>
    </Box>
    </Box>
    </div>
  )
}
