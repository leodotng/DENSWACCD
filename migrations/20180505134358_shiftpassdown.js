
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shiftpassdown', (table) => {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.text('shiftpassdetails');
  
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTable('shiftpassdown')
  };
  