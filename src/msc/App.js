import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import reportWebVitals from './reportWebVitals';
import Register from './pages/Register'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Header from './pages/Wireframe'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

import logo from './signin.JPG';
import black from './black.jpg';
import white from './white.jpg';
import rectangle from './Rectangle.png';
import playbtn from './Group.png';
import poly from './Polygon.png';
import rec2 from './retangle2.png';
import rec3 from './smallRec.png';
import Footer from './pages/F/Footer';
import Router from './routes';


function App() {
  return (
    <>
    
    <Router />
   
  </>
  )
}

export default App