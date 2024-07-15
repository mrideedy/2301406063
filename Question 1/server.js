const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Replace with desired port number

// Configure body parser for JSON data
app.use(bodyParser.json());

// Endpoint to handle company registration (replace with actual logic)
app.post('/register', (req, res) => {
  // Access company data from the request body
  const companyName = req.body.companyName;
  const ownerName = req.body.ownerName;
  const rollNo = req.body.rollNo;
  const ownerEmail = req.body.ownerEmail;
  const accessCode = req.body.accessCode;

  // Replace with actual registration logic (e.g., database interaction)
  console.log(`Company registration request:`);
  console.log(`  Company Name: ${companyName}`);
  console.log(`  Owner Name: ${ownerName}`);
  console.log(`  Roll Number: ${rollNo}`);
  console.log(`  Owner Email: ${ownerEmail}`);
  console.log(`  Access Code: ${accessCode}`);

  // Simulate successful registration (replace with actual response)
  res.status(200).json({
    message: 'Registration successful! (placeholder response)'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
