
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shiftpassdown', (table) => {
        table.increments();
        table.timestamps([useTimestamps], [defaultToNow])
        table.text('shiftpassdetails');
  
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTable('shiftpassdown');
  };
  