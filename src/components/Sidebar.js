// src/components/Sidebar.js

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { People, Dashboard, Work, Schedule } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', marginTop: '64px' },
      }}
    >
      <List>
        <ListItem>
          <Typography variant="h6" noWrap>
          </Typography>
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/employees">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="/attendance">
          <ListItemIcon>
            <Schedule />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
