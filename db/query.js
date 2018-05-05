const db = require('./connection');

//FULL CRUD CRITICAL UPDATES
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
// END FULL CRUD CRITICAL UPDATES

//FULL CRUD SHIFT PASSDOWNS
function getShiftPassdowns(){
    return db('shiftpassdown').orderBy('shiftpassdetails');
}

function addShiftPassdown(data){
    return db('shiftpassdown').insert(data);
}

function getShiftPassdown(id){
    return db('shiftpassdown').where('id', id);
}

function updateShiftPassdown(id, data) {
    return db('shiftpassdown').where('id', id).update(data);
}

function deleteShiftPassdown(id) {
    return db('shiftpassdown').where('id',id).del();
}
// END FULL CRUD SHIFT PASSDOWNS

module.exports = {
    getCriticalUpdates,
    addCriticalUpdate,
    getCriticalUpdate,
    updateCriticalUpdate,
    deleteCriticalUpdate,
    getShiftPassdowns,
    addShiftPassdown,
    getShiftPassdown,
    updateShiftPassdown,
    deleteShiftPassdown

}