const mongoose = require('mongoose');

const checkedSchema = new mongoose.Schema({
  checked: [Object],
  total: Number
});

const Checked = mongoose.model('Checked', checkedSchema);

module.exports = Checked;
