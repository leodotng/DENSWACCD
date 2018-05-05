const db = require('./connection');

function getCriticalUpdates(){
    return db('criticalupdates').orderBy('critdetails');
}

function getCriticalUpdate(id){
    return db('criticalupdates').where('id', id);
}

function getShiftPassdowns(){
    return db('shiftpassdown').orderBy('shiftpassdetails')
}
function getShiftpassdown(id){
    return db('shiftpassdown').where('id', id);
}

module.exports = {
    getCriticalUpdates,
    getCriticalUpdate,
    getShiftPassdowns,
    getShiftpassdown

}