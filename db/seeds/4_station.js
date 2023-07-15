/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const seed = async function (knex) {
  // Deletes ALL existing entries
  const stations = [
    {
      // id: 1,
      name: "Beruniy",
      path_id: 1,
      forward_id: 2,
      backward_id: null,
      has_path_link: false,
    },
    {
      // id: 2,
      name: "Tinchlik",
      path_id: 1,
      forward_id: 3,
      backward_id: 1,
      has_path_link: false,
    },
    {
      // id: 3,
      name: "Chorsu",
      path_id: 1,
      forward_id: 4,
      backward_id: 2,
      has_path_link: false,
    },
    {
      // id: 4,
      name: "Gafur Gulom",
      path_id: 1,
      forward_id: 3,
      backward_id: 5,
      has_path_link: false,
    },
    {
      // id: 5,
      name: "Alisher Navoiy",
      path_id: 1,
      forward_id: 6,
      backward_id: 4,
      has_path_link: true,
    },
    {
      // id: 6,
      name: "Uzbekistan",
      path_id: 1,
      forward_id: 5,
      backward_id: 7,
      has_path_link: false,
    },
    {
      // id: 7,
      name: "Kosmonavtlar",
      path_id: 1,
      forward_id: 8,
      backward_id: 6,
      has_path_link: false,
    },
    {
      // id: 8,
      name: "Oybek",
      path_id: 1,
      forward_id: 7,
      backward_id: 9,
      has_path_link: true,
    },
    {
      // id: 9,
      name: "Toshkent",
      path_id: 1,
      forward_id: 10,
      backward_id: 8,
      has_path_link: false,
    },
    {
      // id: 10,
      name: "Mashinasozlar",
      path_id: 1,
      forward_id: 9,
      backward_id: 11,
      has_path_link: false,
    },
    {
      // id: 11,
      name: "Do'stlik",
      path_id: 1,
      forward_id: null,
      backward_id: 10,
      has_path_link: false,
    },
    {
      // id: 12,
      name: "Turkiston",
      path_id: 2,
      forward_id: 13,
      backward_id: null,
      has_path_link: false,
    },
    {
      // id: 13,
      name: "Yunusobod",
      path_id: 2,
      forward_id: 14,
      backward_id: 12,
      has_path_link: false,
    },
    {
      // id: 14,
      name: "Shahriston",
      path_id: 2,
      forward_id: 13,
      backward_id: 15,
      has_path_link: false,
    },
    {
      // id: 15,
      name: "Bodomzor",
      path_id: 2,
      forward_id: 16,
      backward_id: 14,
      has_path_link: false,
    },
    {
      // id: 16,
      name: "Minor",
      path_id: 2,
      forward_id: 15,
      backward_id: 17,
      has_path_link: false,
    },
    {
      // id: 17,
      name: "Abdulla Qodiriy",
      path_id: 2,
      forward_id: 18,
      backward_id: 16,
      has_path_link: false,
    },
    {
      // id: 18,
      name: "Yunus Rajabiy",
      path_id: 2,
      forward_id: 17,
      backward_id: 19,
      has_path_link: true,
    },
    {
      // id: 19,
      name: "Ming O'rik",
      path_id: 2,
      forward_id: null,
      backward_id: 18,
      has_path_link: true,
    },
    {
      // id: 20,
      name: "Buyuk Ipak Yo'li",
      path_id: 3,
      forward_id: 21,
      backward_id: null,
      has_path_link: false,
    },
    {
      // id: 21,
      name: "Pushkin",
      path_id: 3,
      forward_id: 22,
      backward_id: 21,
      has_path_link: false,
    },
    {
      // id: 22,
      name: "Hamid Olimjon",
      path_id: 3,
      forward_id: 23,
      backward_id: 22,
      has_path_link: false,
    },
    {
      // id: 23,
      name: "Amir Temur xiyoboni",
      path_id: 3,
      forward_id: 24,
      backward_id: 23,
      has_path_link: true,
    },
    {
      // id: 24,
      name: "Mustaqillik maydoni",
      path_id: 3,
      forward_id: 25,
      backward_id: 24,
      has_path_link: false,
    },
    {
      // id: 25,
      name: "Paxtakor",
      path_id: 3,
      forward_id: 26,
      backward_id: 24,
      has_path_link: true,
    },
    {
      // id: 26,
      name: "Xalqlar Do'stligi",
      path_id: 3,
      forward_id: 27,
      backward_id: 25,
      has_path_link: false,
    },
    {
      // id: 27,
      name: "Milliy Bog'",
      path_id: 3,
      forward_id: 28,
      backward_id: 26,
      has_path_link: false,
    },
    {
      // id: 28,
      name: "Novza",
      path_id: 3,
      forward_id: 29,
      backward_id: 27,
      has_path_link: false,
    },
    {
      // id: 29,
      name: "Mirzo Ulug'bek",
      path_id: 3,
      forward_id: 30,
      backward_id: 28,
      has_path_link: false,
    },
    {
      // id: 30,
      name: "Chilonzor",
      path_id: 3,
      forward_id: 31,
      backward_id: 29,
      has_path_link: false,
    },
    {
      // id: 31,
      name: "Olmazor",
      path_id: 3,
      forward_id: null,
      backward_id: 30,
      has_path_link: false,
    },
  ];
  await knex("stations").del();
  await knex('stations').insert(stations)
  // return Promise.all(stations.map((s) => knex("stations").insert(s)));
};
