
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('dogs').insert({id: 1, name: 'Rex', person_id: 1 }),
        knex('dogs').insert({id: 2, name: 'Flex', person_id: 2 }),
        knex('dogs').insert({id: 3, name: 'Tex', person_id: 3})
      ]);
    });
};
