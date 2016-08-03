
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('person').insert({id: 1, lastName: 'Robinson' , firstName: 'Max', email: 'Max_Robinson@hotmail.com' , address: '7 Kotari Road' , city:'Wellington' }),
        knex('person').insert({id: 2, lastName: 'Brennan' , firstName: 'Josh', email: 'Josh_Brennan@hotmail.com' , address: '8 Kotari Road' , city:'Wellington'}),
        knex('person').insert({id: 3, lastName: 'Neal' , firstName: 'Brighetti', email: 'Brighetti_Neal@hotmail.com' , address: '9 Kotari Road' , city:'Wellington'})
      ]);
    });
};
