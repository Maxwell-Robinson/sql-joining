
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({lastName: 'Robinson' , firstName: 'Max', email: 'Josh_Robinson@hotmail.com' , address: '7 Kotari Road' , city:'Wellington' }),
        knex('users').insert({lastName: 'Brennan' , firstName: 'Josh', email: 'Josh_Brennan@hotmail.com' , address: '8 Kotari Road' , city:'Wellington'}),
        knex('users').insert({lastName: 'Neal' , firstName: 'Brighetti', email: 'Brighetti_Neal@hotmail.com' , address: '9 Kotari Road' , city:'Wellington'})
      ]);
    });
};
