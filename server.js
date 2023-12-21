require('dotenv').config();
// ===== Load express =====
const express = require('express');
//=====load mongoose=======
const mongoose = require('mongoose');
const methodOverride = require("method-override");


// ===== Create our express app ======
const app = express();

// ===== configure the app (app.set) =====
 const jsxViewEngine = require('jsx-view-engine');
const Pokemon =require('./models/pokemon.js');

//global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//connect to mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () =>{
    console.log('connected to Mongo');
})
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware is Running');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
// Define another route - /home

app.get('/', async (req, res) => {
    // res.send('99 Bottles of chocolate milk on the wall')
    res.send("Welcome To The <a href='/pokemon'>POKEMON</a> APP!");
  })

  //Index
  app.get('/pokemon',async (req, res) => {
    // res.render('Index',{pokemons:pokemon});
    // res.render('fruits/Index', {fruits: fruits});
    try{
      const foundPokemons = await Pokemon.find({});
      res.status(200).render('Index', {pokemon: foundPokemons});
  } catch (err){
      res.status(400).send(err)
  }
  })

  // N - NEW - allows a user to input a new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});
//CREATE----
app.post('/pokemon', async (req, res) =>{
  try {
    const createPokemon = await Pokemon.create(req.body);
    res.render("Show", { p : searchPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
})
//DELETE----------
app.delete('/pokemon/:id', async (req, res) => {
  try{
    const deletePokemon = await Pokemon.findByIdAndDelete(req.params.id);
    console.log(deletePokemon);
    res.status(200).redirect('/pokemon');
  } catch (err) {
    res.status(400).send(err);
  }
})

//U-UPDATE ------
app.put('/pokemon/:id', async (req, res) =>{
  try {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).redirect(`/pokemon/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
})
//EDIT------------
app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.status(200).render("Edit", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});


//Show----
  app.get('/pokemon/:id', async (req, res) => {
    //  res.render('Show',{pokemon:pokemons[req.params.id]});
    // res.send(pokemon[req.params.id])
    // res.render('fruits/Index', {fruits: fruits});
    try{
      const foundPokemon = await Pokemon.findById(req.params.id);
      res.render('Show', {p: foundPokemon});
    } catch (err){
      res.status(400).send(err);
    }
  })
  // ===== Tell the app to listen on port 3000 =====
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})