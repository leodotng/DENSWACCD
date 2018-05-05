
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('shiftpassdown', function(table){
        table.increments()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.text('shiftpassdetails')
        }),
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTable('shiftpassdown')
    ])
  };
  