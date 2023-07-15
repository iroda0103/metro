/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("station_path_links").del();
  await knex("stations").del();
  await knex("path_links").del();
  await knex("paths").del();
  await knex("metros").insert([
    {
      id:"sc12039691",
      name: "TOSHKENT",
    },
    {
      id:"sc19351236",
      name: "XARKIV",
    },
    {
      id:"sc04704892",
      name: "BUDAPESH",
    },
  ]);
};
