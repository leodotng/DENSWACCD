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

router.get('/criticalupdate/:id', function(req, res, next) {
  db.getCriticalUpdate(req.params.id)
  .then(criticalupdate => {
    res.render('criticalupdate', {
      criticalupdate: criticalupdate[0]
    });
  });
});

router.put('/updatecriticalupdate/:id', function(req, res, next) {
  db.updateCriticalUpdate(req.params.id, req.body)
  .then(data => {
    res.redirect('/criticalupdates');
  });
});

router.delete('/deletecriticalupdate/:id', function(req, res, next) {
  db.deleteCriticalUpdate(req.params.id)
  .then(data => {
    res.redirect('/criticalupdates');
  });
});

// END CRITICAL UPDATES ROUTES
// ==========================================================================================//
// BEGIN SHIFTPASSDOWN ROUTES

router.get('/shiftpassdowns', function(req, res, next) {
  db.getShiftPassdowns()
  .then(shiftpassdowns => {
    res.render('shiftpassdowns', {
      shiftpassdowns: shiftpassdowns
    });
  });
});

router.post('/addshiftpassdown', function(req, res, next) {
  db.addShiftPassdown(req.body)
  .then(data => {
    res.redirect('/shiftpassdowns');
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

router.put('/updateshiftpassdown/:id', function(req, res, next) {
  db.updateShiftPassdown(req.params.id, req.body)
  .then(data => {
    res.redirect('/shiftpassdowns');
  });
});

router.delete('/deleteshiftpassdown/:id', function(req, res, next) {
  db.deleteShiftPassdown(req.params.id)
  .then(data => {
    res.redirect('/shiftpassdowns');
  });
});

// END SHIFTPASSDOWN ROUTES

module.exports = router;
