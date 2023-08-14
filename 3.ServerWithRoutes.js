const express = require('express');
const app = express();
const PORT = 3002;
const hostname = 'localhost';

app.get(['/','home'] ,(req,res) =>{
    res.send({msg : `I am home page`});
});

app.get('/about' ,(req,res) =>{
    res.send({msg : `I am about page`});
});

app.get('/contact' ,(req,res) =>{
    res.send({email:`suppor#@pwskills.com`});
});

app.get('/:anything', (req, res) => {
    const input = req.params['anything'];
  
    // Check if the input is valid
    if (!input) {
      res.status(400).send('Invalid input.');
      return;
    }
  
    // Send a response back to the client
    res.send(`Error : Undefined Query (${input}). `);
  });


app.listen(PORT, () => {
    console.log(`Server sir is running at ${hostname}:${PORT}`);
})