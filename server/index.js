const express = require('express');
const app = express();
const serverRenderer = require('./serverRenderer').default;

app.use(express.static('public'));
app.use(serverRenderer());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});

export default app;