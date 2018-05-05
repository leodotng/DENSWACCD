const db = require('./connection');

function getCriticalUpdates(){
    return db('criticalupdates').orderBy('critdetails');
}

function getShiftPassdowns(){
    return db('shiftpassdown').orderBy('shiftpassdetails')
}

module.exports = {
    getCriticalUpdates,
    getShiftPassdowns
}