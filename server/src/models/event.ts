import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/db";

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "event",
  }
);

export default Event;
