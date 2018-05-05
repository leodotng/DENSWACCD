var express = require('express');
var router = express.Router();
const db = require('../db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// BEGIN CRITICAL UPDATES ROUTES
router.get('/criticalupdates', function(req, res, next) {
  db.getCriticalUpdates()
  .then(criticalupdates => {
    res.render('criticalupdates', {
      criticalupdates: criticalupdates
    });
  });
});

router.post('/addcriticalupdate', function(req, res, next) {
  db.addCriticalUpdate(req.body)
  .then(data => {
    res.redirect('/criticalupdates');
  });
});

router.get('/criticalupdates/:id', function(req, res, next) {
  db.getCriticalUpdate(req.params.id)
  .then(criticalupdates => {
    res.render('criticalupdates', {
      criticalupdates: criticalupdates[0]
    });
  });
});

// END CRITICAL UPDATES ROUTES
// ==========================================================================================//
// BEGIN SHIFTPASSDOWN ROUTES

router.get('/shiftpassdown', function(req, res, next) {
  db.getShiftPassdowns()
  .then(shiftpassdown => {
    res.render('shiftpassdown', {
      shiftpassdown: shiftpassdown
    });
  });
});

router.get('/shiftpassdown/:id', function(req, res, next) {
  db.getShiftPassdown(req.params.id)
  .then(shiftpassdown => {
    res.render('shiftpassdown', {
      shiftpassdown: shiftpassdown[0]
    });
  });
});

// END SHIFTPASSDOWN ROUTES

module.exports = router;
