// ===== Load express =====
const express = require('express');

// ===== Create our express app ======
const app = express();

// ===== configure the app (app.set) =====
 const jsxViewEngine = require('jsx-view-engine');
const pokemon =require('./models/pokemon.js');
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// Define another route - /home

app.get('/', (req, res) => {
    // res.send('99 Bottles of chocolate milk on the wall')
    res.send('Welcome To The POKEMON APP!');
  })

  app.get('/pokemon', (req, res) => {
    res.render('Index',{pokemon:pokemon});
    // res.render('fruits/Index', {fruits: fruits});
  })

  app.get('/pokemon/:id', (req, res) => {
     res.render('Show',{pokemon:pokemon[req.params.id]});
    // res.send(pokemon[req.params.id])
    // res.render('fruits/Index', {fruits: fruits});
  })
  // ===== Tell the app to listen on port 3000 =====
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})