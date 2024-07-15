const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


// My private token 
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMDMwNTI0LCJpYXQiOjE3MjEwMzAyMjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjgzYTNmZDlkLTRmY2UtNDU4My05ZDI5LWUwODU5MDc2MTcyZSIsInN1YiI6Im1yaWdhbmtzaGVraGFyY3I3QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvU2hvcHB5IiwiY2xpZW50SUQiOiI4M2EzZmQ5ZC00ZmNlLTQ1ODMtOWQyOS1lMDg1OTA3NjE3MmUiLCJjbGllbnRTZWNyZXQiOiJuRVFBUVdqdVppUGtGSWlmIiwib3duZXJOYW1lIjoiTXJpZ2FuayIsIm93bmVyRW1haWwiOiJtcmlnYW5rc2hla2hhcmNyN0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMzAxNDA2MDYzIn0.8qB7l0m83FFhm0NQUXnU2qFIH68oeAwVUTSf-xJlJK8";

app.get('/categories/:category/products', async (req, res) => {
  const { category } = req.params;
  const { n, minPrice, maxPrice } = req.query;
  
  try {
    const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${category}/products`, {
      params: { top: n, minPrice, maxPrice },
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    res.json(response.data);


  } catch (error) {
    console.error('Error occurred:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      res.status(error.response.status).send(error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
      res.status(500).send('No response received from the server.');
    } else {
      console.error('Error setting up request:', error.message);
      res.status(500).send('Error setting up request.');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
