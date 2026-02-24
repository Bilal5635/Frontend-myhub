import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserContext } from '../../Contextprovider'
import { useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react'



export default function EditProduct() {

  const {id}=useParams();
  const nav=useNavigate();
  const{host}=useContext(UserContext)
  const[UpdateProduct, setUpdateProduct]=useState({
    Name:'',
    Price:'',
    Description:'',
    Category:'',
    Stock:'',
  });

  // const [image,setImage]=useState('')
  const [image, setImage] = useState(null);


  const[Cat,setCat]=useState([]);
  useEffect(()=>{
    axios.get(`${host}/category/viewcat`)
    .then((res)=>{
      console.log(res.data)
      setCat(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    });
  },[]);


  useEffect(()=>{
    axios.get(`${host}/product/byid/${id}`)
    .then((res)=>{
      console.log(res.data.data,"single data");
      setUpdateProduct(res.data.data);

    })
    .catch((err)=>{
      console.log(err);
    });
  },[id]);

  const handleChange = (e)=>{
    setUpdateProduct({...UpdateProduct,[e.target.name]:e.target.value});
  };

  // const handleImage=(e)=>{
  //   setImage({...image,[e.target.name]:e.target.files[0]});
  // };
  const handleImage = (e) => {
  setImage(e.target.files[0]);
};


  console.log(UpdateProduct,"update product");

  const handleSubmit=async(e)=> {
    e.preventDefault();


  const Data=new FormData();
  Data.append('Name',UpdateProduct.Name);
  Data.append('Category',UpdateProduct.Category);
  Data.append('Price',UpdateProduct.Price);
  Data.append('Stock',UpdateProduct.Stock);
  Data.append('Description',UpdateProduct.Description);

if (image) {
  Data.append("image", image);
}

  console.log(id,"hhh")


  axios.put(`${host}/product/updateprod/${id}`,Data)
  .then((res)=>{
    alert("Data updated successfully",res.data);
    nav('/admin/viewprod');
  })
  .catch((err)=>{
console.log("error updating products",err)
  })

};

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 480,
          p: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          boxShadow: 12,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={2}
        >
          Add Product
        </Typography>

        <TextField
          fullWidth
          label="Product Name"
          name="Name"
          value={UpdateProduct.Name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Price"
          name="Price"
          value={UpdateProduct.Price}
          onChange={handleChange}
          type="number"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Stock Quantity"
          name="Stock"
          value={UpdateProduct.Stock}
          onChange={handleChange}
          type="number"
          margin="normal"
        />

        <TextField
  fullWidth
  select
  label="Category"
  name="Category"
  value={UpdateProduct.Category}
  onChange={handleChange}
  margin="normal"
>
  {Cat.map((item)=>(
      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
  )
  )}

</TextField>


        <TextField
          fullWidth
          label="Description"
          name="Description"
          value={UpdateProduct.Description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          
          type='file'
          // name="image"
          accept="image/*"
      
          onChange={handleImage}
          margin="normal"
      
        />

        

        <Button
          fullWidth
          onClick={handleSubmit}
          sx={{
            mt: 4,
            py: 1.4,
            borderRadius: 3,
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #7b2ff7, #9f44d3)',
            boxShadow: '0 8px 25px rgba(123,47,247,0.4)',
            '&:hover': {
              background: 'linear-gradient(160deg, #49d088, #7b2ff7)',
            },
          }}
        >
           MAKE CHANGES
        </Button>
      </Box>
    </Box>
  )
}

