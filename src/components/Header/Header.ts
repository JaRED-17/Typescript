import React from 'react';
import AppBar from '@material-ui/core'
import Toolbar from '@material-ui/core'
import IconButton from '@material-ui/core'
import MenuIcon from '@material-ui/core'
import Typography from '@material-ui/core'

function Header () {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;