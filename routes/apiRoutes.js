const router = require('express').Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//GET Route for retrieving all notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"))
});

// POST Route for submitting a new note
router.post('/notes', (req, res) => {

  const { title, text } = req.body;

  
  if (title, text) {
    
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    //Reads the notes
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
      const parsedNotes = JSON.parse(data);
      parsedNotes.push(newNote)
      console.log(parsedNotes)
      
      //writes new notes back to the file
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err) =>{
        if (err ) throw err;
        console.log("Notes updated!")
      })
    })
    res.sendFile(path.join(__dirname, "../db/db.json"))
}

});

module.exports = router;