const { DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes)=>{
    const subscriber= sequelize.define("subscriber",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    return subscriber;
}