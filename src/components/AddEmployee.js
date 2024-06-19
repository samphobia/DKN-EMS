// // src/components/AddEmployee.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const AddEmployee = () => {
//   const [employee, setEmployee] = useState({
//     firstName: '',
//     lastName: '',
//     emailId: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/api/v1/employees', employee)
//       .then(response => {
//         console.log('Employee added successfully:', response.data);
//         // Redirect or update the UI as needed
//       })
//       .catch(error => {
//         console.error('There was an error adding the employee!', error);
//       });
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Add Employee
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="First Name"
//             name="firstName"
//             value={employee.firstName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Last Name"
//             name="lastName"
//             value={employee.lastName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Email"
//             name="emailId"
//             value={employee.emailId}
//             onChange={handleChange}
//             type="email"
//             fullWidth
//             margin="normal"
//             required
//           />
//           <Button variant="contained" color="primary" type="submit" fullWidth>
//             Add Employee
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default AddEmployee;


// src/components/AddEmployee.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/employees', employee)
      .then(response => {
        console.log('Employee added successfully:', response.data);
        // Reset the form fields
        setEmployee({
          firstName: '',
          lastName: '',
          emailId: '',
        });
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Employee
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddEmployee;
