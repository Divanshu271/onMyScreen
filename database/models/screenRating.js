const { DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes)=>{
    const screenRating= sequelize.define("screenRating",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        photoLink:{
            type:DataTypes.STRING,
            allowNull:false
        },
        shortDescription:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ratings:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    });


    return screenRating;
}