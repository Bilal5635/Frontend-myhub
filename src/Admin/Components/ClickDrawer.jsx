import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function ClickDrawer() {

  const nav=useNavigate();
  const handleLogout= async()=>{
  alert("Logged out");
  localStorage.removeItem("adminToken");
  setTimeout(()=>{
    nav('/admin/alogin')
  })
}

  return (
    <div>
        <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
        background:"linear-gradient(140deg, rgb(103, 141, 217), #376bc5ff)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
  <Typography variant="h6" noWrap component="div">
    Admin Panel
  </Typography>

  <Typography
    variant="body1"
    sx={{ cursor: "pointer" }}
    onClick={handleLogout}
  >
    LogOut
  </Typography>
</Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>

           <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/"
    sx={{
      background: 'linear-gradient(135deg, #660505, #13024f)',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#222',
      },
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItemButton>
</ListItem>
<hr/>



           <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/viewuser"
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: '#222',
      },
  
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Manage User" />
  </ListItemButton>
</ListItem>

<hr/>
<ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/category"
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#222',
      },
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Manage Category" />
  </ListItemButton>
</ListItem>
<hr/>


 <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/addprod"
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#222',
      },
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="ADD PRODUCTS" />
  </ListItemButton>
</ListItem>
<hr/>

 <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/viewprod"
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#222',
      },
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="VIEW PRODUCTS" />
  </ListItemButton>
</ListItem>
<hr/>


            <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/admin/viewcat"
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#222',
      },
    }}
  >
    <ListItemIcon sx={{ color: '#fff' }}>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="View Category" />
  </ListItemButton>
</ListItem>
<hr/>

           


        </List>


      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

        {/* <Typography sx={{ marginBottom: 2 }}>
          paragraph lorem
        </Typography>
       */}
      </Box>
    </Box>
      
    </div>
  )
}
