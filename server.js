
const express = require("express");
const app = express();
app.use(express.static('public'))



const port = 8000 || process.env.PORT;


app.listen(port, () =>
  console.log(`Your APP is listening on port ${port}`)
);
