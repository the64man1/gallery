// Local variables to call on packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Painting extends Model {}

Painting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true,
                notNull: true,
                notEmpty: true,
                len: [3]
            }
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notNull: true,
                notEmpty: true,
                len: [3]
            }
        },
        created_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        original_painter: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        current_owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true
    }
);

module.exports = Painting;