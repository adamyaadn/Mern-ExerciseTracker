const router = require('express').Router();
let Water = require('../models/water.model');

router.route('/').get((req, res) => {
  Water.find()
    .then(waterentries => res.json(waterentries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const quantity = Number(req.body.quantity);
  const date = Date.parse(req.body.date);

  const newWater = new Water({
    username,
    quantity,
    date,
  });

  newWater.save()
  .then(() => res.json('Water entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Water.findById(req.params.id)
    .then(waterentry=> res.json(waterentry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Water.findByIdAndDelete(req.params.id)
    .then(() => res.json('Water entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Water.findById(req.params.id)
    .then(waterentry => {
      waterentry.username = req.body.username;
      waterentry.quantity = Number(req.body.quantity);
      waterentry.date = Date.parse(req.body.date);

      waterentry.save()
        .then(() => res.json('Water entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;