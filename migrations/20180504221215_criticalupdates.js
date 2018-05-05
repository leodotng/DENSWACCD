
exports.up = function(knex, Promise) {
  return knex.schema.createTable('criticalupdates', (table) => {
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.text('critdetails');

  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('criticalupdates');
};
