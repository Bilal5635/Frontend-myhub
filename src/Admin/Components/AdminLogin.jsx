import React, { useState, useContext } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../Contextprovider'

export default function AdminLogin() {
  const nav = useNavigate()
  const { host } = useContext(UserContext)

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await axios.post(`${host}/admin/login`, login)

  //     if (res.data.success) {
  //       localStorage.setItem(
  //         'adminToken',
  //         JSON.stringify(res.data.adminToken)
  //       )
  //       alert('ADMIN LOGIN SUCCESSFUL')
  //       nav('/admin/dashboard')
  //     } else {
  //       alert('Invalid admin credentials')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     alert('ERROR DURING ADMIN LOGIN')
  //   }
  // }




   const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${host}/admin/login`, login)

      if (res.data.success) {
        localStorage.setItem(
          'adminToken',
          JSON.stringify(res.data.adminToken)
        )
        alert('ADMIN LOGIN SUCCESSFUL')
        nav('/admin')
      } else {
        alert('Invalid admin credentials')
      }
    } catch (error) {
      console.error(error)
      alert('ERROR DURING ADMIN LOGIN')
    }
  }
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #bcb2e900, #928dab)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 450,
          p: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          boxShadow: 14,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={1}
        >
          Admin Login
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Login to Admin Dashboard
        </Typography>

        <TextField
          fullWidth
          label="Admin Email"
          name="email"
          value={login.email}
          onChange={handleChange}
          type="email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          value={login.password}
          onChange={handleChange}
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          onClick={handleSubmit}
          type='submit'
          sx={{
            mt: 4,
            py: 1.4,
            borderRadius: 3,
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #660505, #13024f)',
            '&:hover': {
              background: 'linear-gradient(135deg, #434343, #000000)',
            },
          }}
        >
          LOGIN AS ADMIN
        </Button>
      </Box>
    </Box>
  )
}
