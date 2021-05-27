const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const waterSchema = new Schema({
  username: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Water = mongoose.model('Water', waterSchema);

module.exports = Water;