const router = require('express').Router();
let Sleep = require('../models/sleep.model');

router.route('/').get((req, res) => {
  Sleep.find()
    .then(sleepentries => res.json(sleepentries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newSleep = new Sleep({
    username,
    duration,
    date,
  });

  newSleep.save()
  .then(() => res.json('Sleep entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sleep.findById(req.params.id)
    .then(sleepentry=> res.json(sleepentry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Sleep.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sleep entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Sleep.findById(req.params.id)
    .then(sleepentry => {
      sleepentry.username = req.body.username;
      sleepentry.duration = Number(req.body.duration);
      sleepentry.date = Date.parse(req.body.date);

      sleepentry.save()
        .then(() => res.json('Sleep entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;