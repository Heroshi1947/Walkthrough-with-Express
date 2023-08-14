const express = require('express');
const app = express();
const hostname = 'localHost';
const PORT = 3000 ; 

let counter = 0 ; 

app.get('/', (req,res) => {
    res.send({counter : counter });
});

app.get('/increment', (req,res) => {
    counter++ ;
    res.send({counter : counter}) ;
});

app.get('/decrement', (req,res) => {
    counter-- ; 
    res.send({counter : counter});
});

app.listen(PORT, () => {
    console.log(`Server is live at ${hostname}:${PORT}`);
})