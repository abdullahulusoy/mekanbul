var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', { title: 'anaSayfa' });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi', { title: 'mekanBilgisi' });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'yorumEkle' });
}

module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,


}