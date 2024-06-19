// src/components/LandingPage.js

import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { People, Work, Schedule } from '@mui/icons-material';

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Employee Management System
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Efficiently manage your employees and their tasks
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/dashboard">
          Get Started
        </Button>
      </Box>

      <Grid container spacing={4} my={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <People style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Manage Employees
            </Typography>
            <Typography component="p">
              Add, remove, and update employee details with ease.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Work style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Assign Tasks
            </Typography>
            <Typography component="p">
              Allocate tasks and monitor progress efficiently.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Schedule style={{ fontSize: 50, color: '#3f51b5' }} />
            <Typography variant="h6" component="h3">
              Track Attendance
            </Typography>
            <Typography component="p">
              Keep track of employee attendance and leaves.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
