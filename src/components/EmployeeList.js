// // src/components/EmployeeList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/employees')
//       .then(response => {
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the employee data!', error);
//       });
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       <Box my={4}>
//         <Typography variant="h4" component="h2" gutterBottom>
//           Employee List
//         </Typography>
//         <Paper elevation={3} style={{ padding: '20px' }}>
//           <List>
//             {employees.map(employee => (
//               <ListItem key={employee.id}>
//                 <ListItemText
//                   primary={`${employee.firstName} ${employee.lastName}`}
//                   secondary={employee.emailId ? employee.emailId : 'No Email Provided'}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default EmployeeList;


// src/components/EmployeeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Fab,
} from '@mui/material';
import { Add, MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee data!', error);
      });
  }, []);

  const handleMenuOpen = (event, employee) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(employee);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedEmployee(null);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Employee List
        </Typography>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Tooltip title="Add Employee">
            <Fab color="primary" component={Link} to="/add-employee">
              <Add />
            </Fab>
          </Tooltip>
        </Box>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.firstName}</TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>{employee.emailId ? employee.emailId : 'No Email Provided'}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-controls="employee-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleMenuOpen(event, employee)}
                      >
                        <MoreVert />
                      </IconButton>
                      <Menu
                        id="employee-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem component={Link} to={`/view-employee/${selectedEmployee?.id}`}>View</MenuItem>
                        <MenuItem component={Link} to={`/edit-employee/${selectedEmployee?.id}`}>Edit</MenuItem>
                        <MenuItem component={Link} to={`/delete-employee/${selectedEmployee?.id}`}>Delete</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default EmployeeList;
