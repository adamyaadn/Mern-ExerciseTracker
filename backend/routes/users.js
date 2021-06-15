const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  console.log("Hello")  
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/add', (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const age = Number(req.body.age);
  const height = Number(req.body.height);
  const weight = Number(req.body.weight);

  console.log(username,password,email,age,height,weight)
  const newUser = new User({username,password,email,age,height,weight});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  console.log(email,password)

  User.findOne({email: email })
  .then(
    u => {
      if(u.password === password)
      res.json(u)

      else{
        res.json({
          "error":"incorrect"

        })
      }


    }
    )
  .catch(err => res.status(400).json('Error: ' + err));

  
  
});


module.exports = router;