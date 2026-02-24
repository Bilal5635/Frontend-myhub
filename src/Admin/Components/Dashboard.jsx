import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const nav=useNavigate();
useEffect(()=>{
  if (localStorage.getItem('adminToken')==null){
nav('/admin/alogin')
  }
},[])
  return (
    <div>
      THIS is dashhhboard
    </div>
  )
}
