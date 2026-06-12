import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

export default function ResponsiveNavigation() {
  // State to track if mobile menu is open
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // The navigation items inside the menu
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

    const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My App
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

   return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Hamburger Menu: Visible ONLY on mobile (xs/sm screens), hidden on md+ */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Responsive Site
          </Typography>

          {/* Desktop Navigation links: Hidden on mobile (xs/sm), visible on md+ */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <IconButton key={item} color="inherit" sx={{ fontSize: '1rem' }}>
                {item}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

            {/* Side Menu: Controlled by mobileOpen state */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
