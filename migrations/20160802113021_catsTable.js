
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function (table){
    table.increments('id');
    table.string('name');
    table.integer('person_id');
  });
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('cats');
};


// id INTEGER,
//  name STRING,
//  personId INTEGER
