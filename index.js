const express  = require ('express');
const app  = express ();
//server creation

app.get('/', (req,res) => {

       res.send('Home routes is Happen Here ');

})

app.listen(3000, ( req,res) => {

    console.log(` Server is running at PORT 3000`);
     
  
} )