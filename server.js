const express = require('express');
const path = require('path');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'));
const port = process.env.PORT || 3000;

app.use(staticFileMiddleware);

app.listen(port, () => {
  console.log(`Express serving on ${port}!`);
});