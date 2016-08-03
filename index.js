var config  = require('./knexfile').development
var knex = require('knex')(config)

// knex.from('person')
//   .innerJoin('cats', 'person.id', 'cats.person_id')
//   .then ( function(data) {
//     console.log('This is the Data for Cats!', data);
//   })
//   .catch (function(err){
//       console.log(err)
//     })
//   .finally( function(){
//     knex.destroy()
//   })

  knex.from('person')
  .innerJoin('personCats', 'person.id', 'personCats.personId')
  .then(function(data){
    console.log('Person stuff', data);
  })
  .catch (function(err){
    console.log(err);
  })
  .finally(function(){
    knex.destroy()
  })


  // knex.from('person')
  //   .innerJoin('dogs', 'person.id', 'dogs.person_id')
  //   .then ( function(data) {
  //     console.log('This is the data for Dogs!', data);
  //   })
  //   .catch (function(err){
  //     console.log(err);
  //   })
  //   .finally(function(){
  //     knex.destroy()
  //   })

  // knex('cats')
  // .insert({name: 'fluffy', person_id: 2})
  // .then(function(data){
  //   console.log(data);
  // })
  // .catch(function(err){
  //   console.log(err);
  // })
  // .finally(function() {
  //   knex.destroy()
  // })
