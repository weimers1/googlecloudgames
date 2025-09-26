import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import 'dotenv';

export const db = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.DB_SCHEMA,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});