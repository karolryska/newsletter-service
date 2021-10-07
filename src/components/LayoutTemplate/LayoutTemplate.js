import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';

const drawerWidth = 200;

const LayoutTemplate = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    const drawer = (
        <div>
        <Toolbar />
        <Divider />
            <List>
                <Link to="/subscribers" style={{ textDecoration: 'none', color: '#20262D'}}>
                    <ListItem button key="subscribers">
                        <ListItemIcon>
                            <PeopleAltSharpIcon />
                        </ListItemIcon>
                        <ListItemText>subscribers</ListItemText>   
                    </ListItem>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: '#20262D'}}>
                    <ListItem button key="campaigns">
                        <ListItemIcon>
                            <MessageSharpIcon />
                        </ListItemIcon>
                        <ListItemText>campaign</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {props.title}
                </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
            <Link to="/">
                <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: '30px', right: '30px' }}>
                    <AddIcon />
                </Fab>
            </Link>
        </Box>
    );
};

LayoutTemplate.propTypes = {
  window: PropTypes.func,
};

export default LayoutTemplate;
