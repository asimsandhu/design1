import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';



import Typography from '@mui/material/Typography';
import { Button, createTheme } from '@mui/material';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import circle from '../../assets/footer/Circle.png';
import cr from '../../assets/footer/cr.png';
function Footer() {
  return (
    <Box  sx={{padding:"80px"}}>

        <Stack  spacing={11}>
        <Stack direction="row" justifyContent='space-between'  >
            <Typography className='txt'>
                Mobile app
            </Typography >
            <Typography  className='txt'>
                Community
            </Typography>
            <Typography className='txt'>
                Company
            </Typography>
            <Typography className='txt'>
                <h4>photos</h4>
            </Typography>
            <Typography className='txt'>
                Helpdesk
            </Typography>
            <Typography className='txt'>
                Blog
            </Typography>
            <Typography className='txt'>
                Resources
            </Typography>
        </Stack >
        <hr className='line'></hr>
        <Stack direction="row" spacing={3} justifyContent='center'>

           <img src={circle}></img> <img src={circle}></img><img src={circle}></img><img src={circle}></img>
        </Stack>
        <Box display='flex' justifyContent='center' >
        <img src={cr} className='fimg'></img>
        </Box>
        </Stack>
    </Box>
  )
}

export default Footer