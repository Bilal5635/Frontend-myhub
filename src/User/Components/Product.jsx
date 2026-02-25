import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Header from './Header';
import { useNavigate, useNavigation } from 'react-router-dom';
// import logo192 from '../../Assets/logo192.png'
// import headphone from '../../Assets/headphone.png'
// import hoodie from '../../Assets/hoodie.png'
import { UserContext } from '../../Contextprovider';
import { useContext } from 'react';
import axios from 'axios';




export default function Product() {

const {host} =  useContext(UserContext)

const[cimage,setCimage]=useState([]);

const nav=useNavigate();
useEffect(()=>{
  if (localStorage.getItem('userToken')==null){
nav('/login')
  }
},[nav])


 useEffect(()=>{
    axios.get(`${host}/product/viewproduct`)
    .then(response=>{
        setCimage(response.data.data)
        console.log(response.data.data)
    })
    .catch(error=>{
        console.error("Error fetching image",error)
    });
 },[host]);




  return (
    <div>
      
 
    
    {cimage.map((row,index)=>(
    <Card sx={{ maxWidth: 345,margin:10}}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
            {row.Name}
          </Typography>
        <CardMedia
          component="img"
          height="190"
                    // image={headphone}

          image={`${host}/image/${row.Image}`} 
          // add image in the card and link
          alt="PRODUCT"
        />

        
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {row.Description}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    ))} 
    
    


    
     </div>
  )
}
