import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config";

const sequelize = new Sequelize(DATABASE_URL as string, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (err) {
    console.log("connecting to database failed");
    return process.exit(1);
  }

  return null;
};

export default connectToDatabase;
