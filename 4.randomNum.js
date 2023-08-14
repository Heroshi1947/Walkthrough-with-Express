const express = require('express');
const app = express();
const PORT = 3003;
const hostname = 'localhost';

const randNum = Math.random()*10 ; // random num between 0 to 10 

app.get(['/random','/'] , (req, res) => {
    res.send({"random": randNum });
});

app.get('/:anything', (req,res) => {
    const input = req.params['anything'];

    if(!input){
        res.status(400).send('Invalid input.');
      return;
    }
    res.send(`Error : Undefined Query (${input}). `);
});

app.listen(PORT, () => {
    console.log(`Server sir is running at ${hostname}:${PORT}`);
});