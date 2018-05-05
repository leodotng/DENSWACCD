
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('criticalupdates').del()
    .then(function () {
      // Inserts seed entries
      return knex('criticalupdates').insert([
        {critdetails: 'No PC Air due to high winds'},
      ]);
    });
};
