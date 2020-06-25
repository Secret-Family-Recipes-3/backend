exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('recipes').insert([
            { 
                title: 'Eggs', 
                description: 'Breakfast eggs', 
                date_created: "2020-06-25",
                users_id: 1,
            },
            { 
                title: 'Toast', 
                description: 'Bread after it was in a toaster', 
                date_created: "2020-06-25",
                users_id: 1,
            },
            { 
                title: 'Cereal', 
                description: 'A bowl, cereal, and some milk', 
                date_created: "2020-06-25",
                users_id: 2,
            },
        ]);
      });
  };