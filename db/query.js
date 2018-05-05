const db = require('./connection');

function getCriticalUpdates(){
    return db('criticalupdates').orderBy('critdetails');
}

function addCriticalUpdate(data){
    return db('criticalupdates').insert(data);
}

function getCriticalUpdate(id){
    return db('criticalupdates').where('id', id);
}

function updateCriticalUpdate(id, data) {
    return db('criticalupdates').where('id', id).update(data);
}

function deleteCriticalUpdate(id) {
    return db('criticalupdates').where('id',id).del();
}


function getShiftPassdowns(){
    return db('shiftpassdown').orderBy('shiftpassdetails')
}
function getShiftpassdown(id){
    return db('shiftpassdown').where('id', id);
}

module.exports = {
    getCriticalUpdates,
    addCriticalUpdate,
    getCriticalUpdate,
    updateCriticalUpdate,
    deleteCriticalUpdate,
    getShiftPassdowns,
    getShiftpassdown

}