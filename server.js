const express  = require('express') ; 
const HOST = '0.0.0.0' ; 
const PORT = 8080 ; 

const app = express() ; 

app.get('/', (req,res) => {

res.send("Hello Wolrd!") ; 


})

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`)