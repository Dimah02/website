import { DataTypes } from "sequelize";
import { sequelize } from "../connector";

export const Event = sequelize.define(
	"Event",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		imagePath: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		altImagePath: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	},
);
