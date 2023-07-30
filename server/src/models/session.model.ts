import {
	DataTypes,
	Model,
	Sequelize,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	ForeignKey
} from "sequelize";
import { UserModel } from "./user.model";

export class SessionModel extends Model<
	InferAttributes<SessionModel>,
	InferCreationAttributes<SessionModel>
> {
	declare id: CreationOptional<string>;
	declare isValid: CreationOptional<boolean>;
	declare did: CreationOptional<string>;
	declare credentials: CreationOptional<string[]>;
}

export const sessionModel = (db: Sequelize) => {
	SessionModel.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				unique: true,
				allowNull: false
			},
			isValid: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false
			},
			did: {
				type: DataTypes.STRING
			},
			credentials: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			}
		},
		{
			sequelize: db,
			modelName: "UserSession"
		}
	);

	return SessionModel;
};
