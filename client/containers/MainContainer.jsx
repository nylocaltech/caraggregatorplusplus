import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Typography, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/Core';
import styles from '../styles.scss';
import CarsInfo from './CarsInfo';
import Trends from './Trends.jsx';

const MainContainer = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        {/* <CssBaseline /> */}
        <AppBar id='nav' position="relative" style={{ background: '#71C562' }}>
          <Toolbar>
            <Typography variant='h6'>(Re)Coupe</Typography>
            <div id="toolbar_links">
            <Link to="/">
                <Tab label="Search" />
              </Link>
              <Link to={'/trends'}>
                <Tab label="Trends" />
              </Link>
              <Link to={'/login'}>
                <Tab label="Log In" />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        
        <main>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Container id="homeBanner">
            {/* <img src='https://i.ibb.co/7G0TVrP/Png-Item-2905296-removebg-preview.png' alt='logo' style={{width: "90px"}}></img> */}
            <Typography variant="h2" align='center' gutterBottom style={{ color: "white"}}>
              (Re)Coupe
            </Typography>
            <Typography variant="h5" align='center' gutterBottom style={{ color: "white"}}>
              Take a spin. Pass it on.
            </Typography>
            </Container>
            <Tabs value={value} onChange={handleChange} centered>
            </Tabs>
          </Box>
        </main>
        </>
    );
}

export default MainContainer;