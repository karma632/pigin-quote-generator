const express = require('express');
const app = express();
const cors = require('cors');

const port =5000;
const host = 'localhost';

app.use(express.json());
app.use(cors());
// takes the data from the form
app.use(express.urlencoded({extended:false}));

//view engine setup
app.set('view engine', 'ejs');

//sets routes
var indexRouter = require('./routes/index');

app.use('/', indexRouter);
   
let pidginQuotes = [
   { id: 1, text: "No condition permanent."},
  { id: 2, text: "Today na today." },
  { id: 3, text: "Man no be wood." },
  { id: 4, text: "Wetin go be, go be." },
  { id: 5, text: "No food for lazy man." },
  { id: 6, text: "All na packaging." },
  { id: 7, text: "Life na jeje." },
  { id: 8, text: "Time na money." },
  { id: 9, text: "No be small thing o." },
  { id: 10, text: "Beta soup na money kill am." },
  { id: 11, text: "Follow who know road." },
  { id: 12, text: "As you make your bed, na so you go lie on top am." },
  { id: 13, text: "If you no get today, you fit get tomorrow." },
  { id: 14, text: "Who no go, no know." },
  { id: 15, text: "E get as e be." },
  { id: 16, text: "One day, one day, monkey go go market, e no go return." },
  { id: 17, text: "Body no be firewood." },
  { id: 18, text: "Na condition make crayfish bend." },
  { id: 19, text: "Make we dey go jeje." },
  { id: 20, text: "No be everything wey shine be gold." },
  { id: 21, text: "E go better." },
  { id: 22, text: "Shine your eye." },
  { id: 23, text: "Wetin you no go fit chop, no use am take smell mouth." },
  { id: 24, text: "One day bush meat go catch the hunter." },
  { id: 25, text: "Pikin wey say him mama no go sleep, him too no go sleep." },
  { id: 26, text: "Man pikin must hustle." },
  { id: 27, text: "Better thing no dey finish." },
  { id: 28, text: "If fish dey for river, na man go catch am." },
  { id: 29, text: "Wetin old man see while sitting down, young person no fit see am even if e climb tree." },
  { id: 30, text: "If breeze blow, fowl yansh go open." },
  { id: 31, text: "Na money be fine bobo." },
  { id: 32, text: "Everyday na for thief, one day na for owner." },
  { id: 33, text: "If you sabi, you sabi." },
  { id: 34, text: "No be everybody wey dey inside bus be passenger." },
  { id: 35, text: "No be mouth dem take chop food." },
  { id: 36, text: "Person wey dey sell tortoise shell, na him dey know where rain dey beat tortoise." },
  { id: 37, text: "Rat wey dey follow lizard enter rain, na e dey find trouble." },
  { id: 38, text: "Pikin wey say him mama no go rest, him too no go sleep." },
  { id: 39, text: "Person wey no get hand no go chop soup." },
  { id: 40, text: "If you wan chop frog, make sure say you chop well." },
  { id: 41, text: "Barka de sallah, no be food." },
  { id: 42, text: "No throway your old pant until you know say your new pant fit you." },
  { id: 43, text: "Wetin dey for lion mind, na wetin e go chop e dey reason." },
  { id: 44, text: "Person wey dey find party, e go follow masquerade waka." },
  { id: 45, text: "Everyday na market, one day na buy." },
  { id: 46, text: "If breeze blow, fowl yansh go open." },
  { id: 47, text: "Man wey dey for water, him no know say water dey boil." },
  { id: 48, text: "Na small pikin dey rush go use big man toilet." },
  { id: 49, text: "Today na today, tomorrow fit be your day." },
  { id: 50, text: "E get why." }
];

//this gets the quotes and send them at random
app.get('/pidginQuote', (req, res) => {
   const randomquote = Math.floor(Math.random() * pidginQuotes.length);
   res.json(pidginQuotes[randomquote]);
  // res.json(pidginQuotes);
 });

 // allows you to add a new quote
 app.post('/pidginQuote', (req, res) => {
   const newQuote = {
     id: pidginQuotes.length + 1,
     text: req.body.text,
     author: req.body.author
   };
   quotes.push(newQuote);
   res.status(201).json(newQuote);
 });


// setting the server
app.listen(port, () => console.log(`Server running at http://${host}:${port}/`));