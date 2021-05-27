const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
  exercisename: { type: String, required: true },
}, {
  timestamps: true,
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;