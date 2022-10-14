var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anaSayfa', { title: 'anaSayfa' });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanBilgisi', { title: 'mekanBilgisi' });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumEkle', { title: 'yorumEkle' });
}

module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,


}