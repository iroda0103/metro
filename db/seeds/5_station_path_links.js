/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('station_path_links').del()
  await knex('station_path_links').insert([
    {
      // id:1
      station_id:5,
      linked_id:25
    },
    {
      // id:1
      station_id:8,
      linked_id:19
    },
    {
      // id:1
      station_id:18,
      linked_id:23
    },
    {
      // id:1
      station_id:25,
      linked_id:5
    },
    {
      // id:1
      station_id:19,
      linked_id:8
    },
    {
      // id:1
      station_id:23,
      linked_id:18
    },
  ]);
};
