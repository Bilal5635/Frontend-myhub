
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
import { useNavigate } from 'react-router-dom';


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




export default function ViewCategory() {

 const {host} =  useContext(UserContext)
 const [categories,setCategories]=useState([]);
const[deletestatus,setDeleteStatus]=useState(null)
const navigate = useNavigate();


 useEffect(()=>{
    axios.get(`${host}/category/viewcat`)
    .then(response=>{
        setCategories(response.data.data)
    })
    .catch(error=>{
        console.error("Error fetching users",error)
    });
 },[]);


 const handleDelete=(id) => {
    console.log(`Delete student with ID:${id}`);
    axios
    .delete(`${host}/category/deletecat/${id}`)
        .then((response) => {
            console.log('Delete Response:',response.data);
            alert('Deleted successfully');
            setDeleteStatus(id);
        })
        .catch((err)=> {
            console.log('ERROR:',err);
        })
    
 }

 const handleEdit = (id) => {
  navigate(`/admin/category/updatecat/${id}`);
};



  return (
    <div>
       <TableContainer component={Paper} sx={{maxWidth:"80%",marginLeft:"270px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL.NO</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">EDIT</StyledTableCell>
            <StyledTableCell align="right">DELETE</StyledTableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row,index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Description}</StyledTableCell>
             
              <StyledTableCell align="right">
  <IconButton size="small" color="primary" onClick={() => handleEdit(row._id)}>
    <EditIcon fontSize="small" />
  </IconButton>
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
