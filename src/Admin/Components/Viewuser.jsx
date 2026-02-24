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




export default function Viewuser() {

 const {host} =  useContext(UserContext)
 const [student,setStudent]=useState([]);
const[deletestatus,setDeleteStatus]=useState(null)


 useEffect(()=>{
    axios.get(`${host}/users/getuser`)
    .then(response=>{
        setStudent(response.data.data)
    })
    .catch(error=>{
        console.error("Error fetching users",error)
    });
 },[]);


 const handleDelete=(id) => {
    console.log(`Delete student with ID:${id}`);
    axios
    .delete(`${host}/users/deleteUser/${id}`)
        .then((response) => {
            console.log('Delete Response:',response.data);
            alert('Deleted successfully');
            setDeleteStatus(id);
        })
        .catch((err)=> {
            console.log('ERROR:',err);
        })
    
 }


  return (
    <div>
       <TableContainer component={Paper} sx={{maxWidth:"80%",marginLeft:"270px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL.NO</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">PHONE NUMBER</StyledTableCell>
            <StyledTableCell align="right">ADDRESS</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row,index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right"><DeleteIcon onClick={()=> handleDelete(row._id)}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
