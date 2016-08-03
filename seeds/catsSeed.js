
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1,name: 'Bruce' , person_id: 1 }),
        knex('cats').insert({id: 2,name: 'Chopper' , person_id: 3 }),
        knex('cats').insert({id: 3,name: 'Theguy' , person_id: 3 })
      ]);
    });
};
    
