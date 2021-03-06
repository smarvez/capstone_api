
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts_exercises').del()
    .then( () => {
      // Inserts seed entries
      return knex('workouts_exercises').insert([
        {id: 1, workout_id: 3, exercise_id:4},
        {id: 2, workout_id: 3, exercise_id:1},
        {id: 3, workout_id: 3, exercise_id:2},
        {id: 4, workout_id: 3, exercise_id:5},
        {id: 5, workout_id: 1, exercise_id:12},
        {id: 6, workout_id: 1, exercise_id:3},
        {id: 7, workout_id: 2, exercise_id:5},
        {id: 8, workout_id: 2, exercise_id:10},
        {id: 9, workout_id: 5, exercise_id:1},
        {id: 10, workout_id: 6, exercise_id:3},
        {id: 11, workout_id: 5, exercise_id:11},
        {id: 12, workout_id: 7, exercise_id:15},
        {id: 13, workout_id: 7, exercise_id:1},
        {id: 14, workout_id: 6, exercise_id:16},

        {id: 15, workout_id: 7, exercise_id:16},
        {id: 16, workout_id: 7, exercise_id:16},
        {id: 17, workout_id: 8, exercise_id:16},
        {id: 18, workout_id: 8, exercise_id:16},
        {id: 19, workout_id: 9, exercise_id:16},
        {id: 20, workout_id: 9, exercise_id:16},
        {id: 21, workout_id: 10, exercise_id:16},
        {id: 22, workout_id: 10, exercise_id:16},
        {id: 23, workout_id: 11, exercise_id:118},
        {id: 24, workout_id: 11, exercise_id:119},
        {id: 25, workout_id: 11, exercise_id:120},
        {id: 26, workout_id: 12, exercise_id:122},
        {id: 27, workout_id: 12, exercise_id:123},
        {id: 28, workout_id: 12, exercise_id:124},
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('workouts_exercises_id_seq', (SELECT MAX(id) FROM workouts_exercises));`
      )
    })
};
