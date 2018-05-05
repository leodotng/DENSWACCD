
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shiftpassdown').del()
    .then(function () {
      // Inserts seed entries
      return knex('shiftpassdown').insert([
        {shiftpassdetails: 'C37 Closed for rest of evening due to staffing'},
      ]);
    });
};
