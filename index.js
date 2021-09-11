const express  = require ('express');
const app  = express ();
//server creation
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

// for unknown url
app.get('*', (req,res) => {

   res.send('404 Not Found');
   console.log('404 Not Found');


})
app.listen(3000, ( req,res) => {

    console.log(` Server is running at PORT 3000`);
     
  
} )