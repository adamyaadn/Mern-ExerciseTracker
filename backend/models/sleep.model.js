const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sleepSchema = new Schema({
  username: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Sleep = mongoose.model('Sleep', sleepSchema);

module.exports = Sleep;