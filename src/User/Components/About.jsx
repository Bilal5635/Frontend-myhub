import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Header from './Header'


export default function About() {
  return (
    <div>
        {/* <Header/> */}
      <Typography >
  Welcome to our platform — a place where innovation meets opportunity.
</Typography>

<Typography >
  Our goal is to bring you the latest products, exclusive deals, and a seamless
  browsing experience.
</Typography>

<Typography >
  We believe in making discovery simple, rewarding, and exciting.
</Typography>
     Click for {""}<Link to='/prod'>AVAILABLE PRODUCTS HERE</Link>
    </div>
  )
}
