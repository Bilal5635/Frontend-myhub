import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserContext } from '../../Contextprovider'
import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react'



export default function AddProduct() {

const {host}=useContext(UserContext)


  const [product, setProduct] = useState({
    Name: '',
    Price: '',
    Description: '',
    Category: '',
    Stock: '',
  })

  const [image,setImage]=useState(null)

  const [category,setCategory]=useState([])

  const nav=useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product,[e.target.name]:e.target.value })
  };

  const handleImage =(e)=>{
    setImage(e.target.files[0])
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const Data = new FormData();//data is variable
    Data.append('Name',product.Name)
    Data.append('Price',product.Price)
    Data.append('Description',product.Description)
    Data.append('Category',product.Category)
    Data.append('Stock',product.Stock)
    Data.append('image',image)


    await axios.post(`${host}/product/addproduct`,Data)
    .then((res)=>{
      if (res.data) {
        alert("Products added succesfully");
        nav("/admin/viewprod");
      }
      else{
        console.log("FAILED TO ADD PRODUCTS");
      }
    })
    .catch((err)=>{
console.log(err)
alert("ERROR ADDING PRODUCTS")
    });
  };

  useEffect(()=>{
    axios.get(`${host}/category/viewcat`)
    .then(response=>{
        setCategory(response.data.data)
    })
    .catch(error=>{
        console.error("Error fetching users",error)
    });
 },[host]);

 console.log(product,"product")

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
          // value={product.Name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Price"
          name="Price"
          // value={product.Price}
          onChange={handleChange}
          type="number"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Stock Quantity"
          name="Stock"
          // value={product.Stock}
          onChange={handleChange}
          type="number"
          margin="normal"
        />

        <TextField
  fullWidth
  select
  label="Category"
  name="Category"
  // value={product.Category}
  onChange={handleChange}
  margin="normal"
>
  {category.map((item)=>(
      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
  )
  )}

</TextField>


        <TextField
          fullWidth
          label="Description"
          name="Description"
          // value={product.Description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          // label="Description"
          type='file'
          name="image"
          accept="image/*"
          // value={product.Description}
          onChange={handleImage}
          margin="normal"
      
        />

        {/* <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          Upload Image
          <input
            type="file"
            hidden
            name="Image"
            accept="image/*"
            onChange={handleImage}
          />
        </Button> */}

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
          ADD PRODUCT
        </Button>
      </Box>
    </Box>
  )
}

