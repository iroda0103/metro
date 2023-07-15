/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('paths').del()
  await knex('paths').insert([
  {
    // id:1
    name:"O'zbekiston yo'li",
    metro_id: 'sc12039691',
  },
  {
    // id:2
    name:"Chilonzor yo'li",
    metro_id:'sc19351236'
   },
   {
    // id:3
    name:"Yunusobod yo'li",
    metro_id:'sc04704892'
   }
  ]);
};
