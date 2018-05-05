
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lateflights', (table) => {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.text('gate');
        table.integer('flightnumber');
        table.text('destination');
        table.text('reason');
        table.text('notes');
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTable('lateflights');
  };
  