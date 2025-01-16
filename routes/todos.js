const router = require("express").Router();
const {v4} = require("uuid");

let myNotes = [];

router.get('',(req,res)=>{
    return res.json(myNotes);
});

router.get('/:id',(req,res)=>{
    let {id} = req.params;
    let oneNote = myNotes.find(i=>i.id===id);
    return res.json(oneNote);
});

router.post('',(req,res)=>{
    let {title} = req.body;
    let newNote = {
        id: v4(),
        title,
        status: false
    }
    myNotes.push(newNote);
    return res.json(newNote);
});


router.put('/:id',(req,res)=>{
    let {id} = req.params;
    let update = myNotes.findIndex(i=>i.id===id);
    myNotes[update].status = !myNotes[update].status;
    return res.json(myNotes[update]);
})

router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    myNotes = myNotes.filter(i=>i.id!==id);
    return res.json(myNotes);
});

module.exports = router

