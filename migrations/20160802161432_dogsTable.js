
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dogs', function (table){
    table.increments('id');
    table.string('name');
    table.integer('person_id');
  });
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('dogs')
};
