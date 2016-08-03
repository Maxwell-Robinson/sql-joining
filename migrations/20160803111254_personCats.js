
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('personCats', function (table){
    table.increments('id')
    table.integer('personId')
    table.string('cats_name')
  })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('personCats')
};
