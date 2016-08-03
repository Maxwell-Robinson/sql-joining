
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personCats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('personCats').insert({id: 1, cats_name: 'Bruce', personId: 1 }),
        knex('personCats').insert({id: 2, cats_name: 'Chopper', personId: 3 }),
        knex('personCats').insert({id: 3, cats_name: 'Theguy', personId: 3 }),
        knex('personCats').insert({id: 4, cats_name: 'fluffy', personId: 2 }),
        knex('personCats').insert({id: 5, cats_name: 'fluffy', personId: 3 })
      ]);
    });
};
