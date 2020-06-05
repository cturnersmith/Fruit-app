const express = require('express'); //just imported express ibrary 

const app = express(); //returns an object
const fruits = require('./models/fruits');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');

//middleware - every request goes through it
//using body parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
//adding router object to middleware
app.use('/fruits', routes.fruits);
app.use('/users', routes.users);

app.listen(3000, () => {
    console.log('I am listening');  //app will run in port 3000
})



// //index
// app.get('/fruits', (req, res) => {
//     res.render('index.ejs', {
//         fruitsList: fruits
//     });

// })

//Rendering empty fruit form
// app.get('/fruits/new', (req, res) => {
// res.render ('new.ejs');
// })

// app.post('/fruits', (req, res) => {
//     //converting checkbox value into js boolean value
//     if(req.body.readyToEAt === 'on') {
//         req.body.readyToEAt = true;
//     } else{
//         req.body.readyToEAt = false;
//     }
//     //saving fruit object in fruits array
//     fruits.push(req.body);

//     console.log(fruits);
//     res.redirect('/fruits')

// })

//show route
// app.get('/fruits/:index', (req, res) => {
//     //example of path
//     let f = fruits[req.params.index];
//     // res.send(fruit);
//     res.render('show.ejs', {
//         fruit: f
//     });
// })

// app.delete('/fruits/:index', (req, res) => {
//     fruits.splice(req.params.index, 1);
//     res.redirect('/fruits');
// })

// app.get('/fruits/:index/edit', (req, res) => {
//     res.render('edit.ejs', {
//         fruit:fruits[req.params.index],
//         index: req.params.index
//     })
// })

// app.put('/fruits/:index', (req, res) => {
//     if(req.body.readyToEAt === 'on') {
//         req.body.readyToEAt = true;
//     } else{
//         req.body.readyToEAt = false;

// }

// fruits[req.params.index] = req.body;
// res.redirect('/fruits');


// })

