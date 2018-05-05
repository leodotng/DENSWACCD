var express = require('express');
var router = express.Router();
const db = require('../db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/criticalupdates', function(req, res, next) {
  db.getCriticalUpdates()
  .then(criticalupdates => {
    res.render('criticalupdates', {
      criticalupdates: criticalupdates
    });
  });
});

router.get('/shiftpassdown', function(req, res, next) {
  db.getShiftPassdowns()
  .then(shiftpassdown => {
    res.render('shiftpassdown', {
      shiftpassdown: shiftpassdown
    });
  });
});

module.exports = router;
