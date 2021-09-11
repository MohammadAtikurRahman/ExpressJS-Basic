const express  = require ('express');
const app  = express ();
//server creation


//GET -  Read data
//Post - Add data
//Delete- Delete Data
//Put-   Full Updated Data
//Patch- Specific Data Updated
app.get('/', (req,res) => {
       res.send('Home routes is Happen Here ');
})
app.get('/signin', (req,res) => {
       const atik = {  
              name: 'Md. Atikur Rahman',
              address: 'Dhaka',
              age: 30
       }
       res.send(atik);
} )


app.get('/hello/:name', (req,res) => {
     
       const name = req.params.name;
    
       res.send(`Hello ${name}`);



})



// for unknown url
app.get('*', (req,res) => {

   res.send('404 Not Found');
   console.log('404 Not Found');


})
app.listen(3000, ( req,res) => {

    console.log(` Server is running at PORT 3000`);
     
  
} )