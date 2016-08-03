
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('person', function (table) {
    table.increments('id');
    table.string('lastName');
    table.string('firstName');
    table.string('email');
    table.string('address');
    table.string('city');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};


// id INTEGER,
//  lastName STRING,
//  firstName STRING,
//  email STRING,
//  address STRING,
//  city STRING
