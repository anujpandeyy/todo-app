const express = require("express");
const {v4} = require("uuid");
const app = express();
const port = 3000;

app.use(express.json());

let myNotes = [];

app.get('/todo',(req,res)=>{
    return res.json(myNotes);
});

app.get('/todo/:id',(req,res)=>{
    let {id} = req.params;
    let oneNote = myNotes.find(i=>i.id===id);
    return res.json(oneNote);
});

app.post('/todo',(req,res)=>{
    let {title} = req.body;
    let newNote = {
        id: v4(),
        title,
        status: false
    }
    myNotes.push(newNote);
    return res.json(newNote);
});







app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
