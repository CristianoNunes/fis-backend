import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const connectDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/database/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
