##Routes
* GET /dog
* GET /dog/:id
* GET /dog/:name
* POST /dog





exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dog').del()
    .then(function () {
      return Promise.all([
      // Inserts seed entries
      knex('dog').insert({
        name: "rufus",
        age: 4,
        breed: "German Shepherd x"
      }),
      knex('dog').insert({
        name: "Fifi",
        age: 14,
        breed: "Chihuahua"
      }),
      knex('dog').insert({
        name: "Bear",
        age: 1,
        breed: "Bulldog"
      }),
      knex('dog').insert({
        name: "Tigger",
        age: 1,
        breed: "Shi Tzu"
      })
    ]);
  });
};
