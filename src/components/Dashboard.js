// src/components/Dashboard.js

import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { People, Work, Schedule } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Welcome back! Here is an overview of your Employee Management System.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <People style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Total Employees
            </Typography>
            <Typography variant="h4" component="p">
              120
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Work style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Tasks Completed
            </Typography>
            <Typography variant="h4" component="p">
              340
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Schedule style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Attendance Rate
            </Typography>
            <Typography variant="h4" component="p">
              95%
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box my={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add-employee"
        >
          Add Employee
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
