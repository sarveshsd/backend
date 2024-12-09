const express = require('express');
const app = express();
const port = 3000;

// Record application start time
const startTime = Date.now();

// Status endpoint
app.get('/status', (req, res) => {
  const uptime = (Date.now() - startTime) / 1000; // Convert milliseconds to seconds
  res.json({
    status: 'OK',
    uptime: `${uptime.toFixed(2)} seconds`,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
