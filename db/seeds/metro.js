/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const  seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("metros").del();
  await knex("metros").insert([
    {
      // id: 1,
      name: "Beruniy",
    },
    {
      // id: 2,
      name: "Buyuk Ipak Yuli",
    },
    {
      // id: 3,
      name: "Chilonzor",
    },
    {
      // id: 4,
      name: "Gafur Gulom",
    },
    {
      // id: 5,
      name: "Khamid Alimdjan",
    },
    {
      // id: 6,
      name: "Komsomolskaya",
    },
    {
      // id: 7,
      name: "Kosmonavtlar",
    },
    {
      // id: 8,
      name: "Mashinasozlar",
    },
    {
      // id: 9,
      name: "Milliy Bog",
    },
    {
      // id: 10,
      name: "Mustakillik Maydoni",
    },
    {
      // id: 11,
      name: "Novza",
    },
    {
      // id: 12,
      name: "Olmazor",
    },
    {
      // id: 13,
      name: "Paxtakor",
    },
    {
      // id: 14,
      name: "Pushkin",
    },
    {
      // id: 15,
      name: "Sabir Rakhimov",
    },
    {
      // id: 16,
      name: "Shahriston",
    },
    {
      // id: 17,
      name: "Tinchlik",
    },
    {
      // id: 18,
      name: "Toshkent",
    },
    {
      // id: 19,
      name: "Toshkent Yoli",
    },
    {
      // id: 20,
      name: "Uzbekistan",
    },
    {
      // id: 21,
      name: "Yunus Rajabi",
    },
    {
      // id: 22,
      name: "Zarqaynar",
    },
  ]);
};
