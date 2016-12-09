const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

app.get('/dogs', (req,res) => {
  knex('dog').then((doggy) => {
    res.json(doggy)
  })
})

app.post('/dogs',(req,res) => {
  console.log(req.body)
  const doginfo = {
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed
  }
  knex('dog').insert(doginfo).returning('id').then((id) => {
    doginfo["id"] = id;
    res.json(doginfo);
  });
})

app.get('/dogs/:name', (req, res) => {
  console.log(req.params)
  res.json(req.params.name);
});

// app.put('/dog', (req,res)=> {
//   const updateDogInfo = {
//     id: req.body.id,
//     name: req.body.name,
//     age: req.body.age,
//     breed: req.body.breed
//   }
//   knex('dog').update(updateDogInfo).returning('id').then( (id) => {
//     updateDogInfo["name"]=req.body.name;
//     updateDogInfo["age"]=req.body.age;
//     updateDogInfo["breed"]=req.body.breed;
//     res.json(updateDogInfo);
//   })
// })

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
