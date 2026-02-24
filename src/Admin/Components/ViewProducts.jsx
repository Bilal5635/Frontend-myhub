
//  create table
// admin regsiter and login
// create admin in indec routing etc
// then edit category like update thread

// export default function ViewCategory() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserContext } from '../../Contextprovider';
import { useContext } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function ViewProducts() {

 const {host} =  useContext(UserContext)
 const [products,setProducts]=useState([]);
const[deletestatus,setDeleteStatus]=useState(null)
const navigate = useNavigate();
//viewprod  is the path

 useEffect(()=>{
    axios.get(`${host}/product/viewproduct`)
    .then(response=>{
        setProducts(response.data.data)
        console.log(response.data.data)
    })
    .catch(error=>{
        console.error("Error fetching users",error)
    });
 },[]);


 const handleDelete=(id) => {
    console.log(`Delete product with ID:${id}`);
    axios
    .delete(`${host}/product/deleteprod/${id}`)
        .then((response) => {
            console.log('Delete Response:',response.data);
            alert('Deleted successfully');
            setDeleteStatus(id);
        })
        .catch((err)=> {
            console.log('ERROR:',err);
        })
    
 }

//  const handleEdit = (id) => {
//   navigate(`/admin/product/getprod/${id}`);
// };



  return (
    <div>
       <TableContainer component={Paper} sx={{maxWidth:"80%",marginLeft:"270px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL.NO</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">PRICE</StyledTableCell>
            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">STOCK</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row,index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Description}</StyledTableCell>
              <StyledTableCell align="right">{row?.Category?.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Stock}</StyledTableCell>
              <StyledTableCell align="right"> <img src={`${host}/image/${row.Image}`} alt="" height={100} width={100}/></StyledTableCell>
             
              <StyledTableCell align="right">
                <Link to={`/admin/editprod/${row._id}`}>
  <IconButton size="small" color="primary" 
  // onClick={() => handleEdit(row._id)}
  >
    <EditIcon fontSize="small" />
  </IconButton>
  </Link>
</StyledTableCell>

<StyledTableCell align="right">
  <IconButton size="small" color="error" onClick={() => handleDelete(row._id)}>
    <DeleteIcon fontSize="small" />
  </IconButton>
</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
