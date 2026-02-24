import React from 'react'
import REIMAGINE from '../../Assets/REIMAGINE.png'
import Box from '@mui/material/Box'
import link from '@mui/material/Link'  //icon
import { Link } from 'react-router-dom'  //to link the capital L
import Typography from '@mui/material/Typography'
import Header from './Header'
export default function Info() {
  return (
    <div>
        {/* <Header/> */}
     {/* //imageeee */}

<Box
  component="img"
  src={REIMAGINE}
  alt="REIMAGINE"
  sx={{
    display: 'block',
    margin: 'auto',
    height: '4in',        // approx 4 inches
    maxWidth: '100%',
    objectFit: 'contain',
  }}
/>
<Typography
  variant="h6"
  sx={{
    maxWidth: 600,
    mt: 4,
    textAlign: 'center',
    lineHeight: 1.6,
  }}
>
  Welcome to our new project. Be the first one to explore new products and
  avail all the rewards and discounts. Click on this{' '}
  <Link
    to="/about"
    style={{
      mx: 'auto',
      color: '#1976d2',
      fontWeight: 600,
      textDecoration: 'none',
    }}
  >
    ➡️ ALL ABOUT PRODUCTS
  </Link>{' '}
  to know more.
</Typography>
 
    </div>
  )
}
