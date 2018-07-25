
const express = require("express");
const app = express();
app.use(express.static('public'))



const port = process.env.PORT || 8000 ;


app.listen(port, () =>
  console.log(`Your APP is listening on port ${port}`)
);
