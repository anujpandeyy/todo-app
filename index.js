const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.use('/todo',require('./routes/todos'))


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
