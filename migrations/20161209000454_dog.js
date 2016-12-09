exports.up = function(knex, Promise) {
  return knex.schema.createTable('dog',(table)=> {
    table.increments();
    table.string('name');
    table.integer('age');
    table.string('breed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog');
};
