const express  = require ('express');
const app  = express ();
//GET -  Read data
//Post - Add data
//Delete- Delete Data
//Put-   Full Updated Data
//Patch- Specific Data Updated

// by default json data can not accept node js


//middleware
//json config for express
app.use(express.json());

let notes = [
     { 
            id:  1,
            title: 'notetitle1',
            description: 'Note description 1'
     },
     {
            id: 2,
            title: 'notetitle2',
            description: 'Note description 2'
     }
]
//Home Routes
app.get('/', (req,res) => {

       res.status(200).send('Notes App Home Routes');
})
//Notes Route
app.get('/notes', (req,res) => {
  // This is from array object which i declared'  
   if(notes.length == 0){
       return res.send('No note has been created');
   }
        res.status(200).send(notes);
})
//get single notes
app.get('/notes/:noteId' , (req,res) => {
 //this noteId from browser
 //noteId variable routingg
 const noteId = parseInt(req.params.noteId ) ;
  //parseint because we get string from link but you need number thats why we converted it
  // noteId from const is just varible
  //noteId from params is routing varible
  // both are same name
  //const noteid can be changed if i wish
  //................................
  // now mathcing note id which i given in the link and which i set in the array object
  const note = notes.find(note => note.id === noteId )
  if(note){
         return res.send(note);
  }
  else{
          res.status(404).send('404 Not Found');
  }
})
// app.get('/signin', (req,res) => {
//        const atik = {  
//               name: 'Md. Atikur Rahman',
//               address: 'Dhaka',
//               age: 30
//        }
//        res.send(atik);
// } )

// app.get('/hello/:name', (req,res) => {
     
//        const name = req.params.name;
    
//        res.send(`Hello ${name}`);

// })

// adding notes
app.post('/notes', (req,res) => {
   //post data add then post we can use by req.body
   // post data come via req.body
   const note = req.body;
   console.log(note);
   //console.log(req.body);
   //console.log('adding note');
   notes = [...notes, note];
   //notes er moddhe ager notes copy kore rakhlam distrucre er maddhome
   // req.body er maddhome jei notun note pailam seitha eikhne add hoa thaklo
   res.send(notes);



})











// for unknown url
app.get('*', (req,res) => {
   res.status(404).send('404 Not Found');
   console.log('404 Not Found');
})
//server creation
app.listen(3000, ( req,res) => {
    console.log(` Server is running at PORT 3000`);
} )