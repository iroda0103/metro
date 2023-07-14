/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('path_links',(table)=>{
        table.increments('id');
        table.integer('path_id').references('id').inTable('paths');
        table.integer('linked_id').references('id').inTable('paths')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('path_links')
};
