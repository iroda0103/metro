/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("stations", (table) => {
    table.increments('id').primary();
    table.string("name").unique();
    table.integer("path_id").references("id").inTable("paths");
    table
      .integer("forward_id")
      .references("id")
      .inTable("stations")
      .onDelete("SET NULL");
    table
      .integer("backward_id")
      .references("id")
      .inTable("stations")
      .onDelete("SET NULL");
      table.boolean('has_path_link').defaultTo(false)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("stations");
};
