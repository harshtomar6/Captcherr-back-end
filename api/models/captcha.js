// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const captchaSchema = new Schema({
  text: { type: String, required: true },
  svg: { type: String, required: true },
  solved: { type: Boolean, default: false },
  validated: { type: Boolean },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
}, {
  versionKey: false
});

const Captcha = mongoose.model('Captcha', captchaSchema);

module.exports = Captcha;