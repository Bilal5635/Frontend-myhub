import React from 'react'
// import Header from './Header'
import shopsmart from '../../Assets/shopsmart.png'
import Box from '@mui/material/Box'
import collect from '../../Assets/collect.jpg'
import concept from '../../Assets/concept.jpg'
import woman from '../../Assets/woman.jpg'

export default function Home() {
  return (
    <div>
      <Box
  component="img"
  src={shopsmart}
  alt="REIMAGINE"
  sx={{
    display: 'block',
    margin: 'auto',
    height: '100%',        // approx 4 inches
    maxWidth: '100%',
    objectFit: 'contain',
  }}
/>

<hr/>
<hr/>
     <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:"black",
    gap: 8, 
        // space between images
    mt: 4,
  }}
>
  <Box
    component="img"
    src={collect}
    alt="Image 1"
    sx={{
      width: 440,
      objectFit: 'contain',
    }}
  />

  <Box
    component="img"
    src={concept}
    alt="Image 2"
    sx={{
      width: 440,
      objectFit: 'contain',
    }}
  />

  <Box
    component="img"
    src={woman}
    alt="Image 3"
    sx={{
      width: 440,
      objectFit: 'contain',
    }}
  />
</Box>
        {/* <Header/> */}

      APPEARS WHEN FIRST OPEN APP
    </div>
  )
}
