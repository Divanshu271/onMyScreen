const { DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes)=>{
    const feedback= sequelize.define("feedback",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        firstName:{
            type:DataTypes.STRING
        },
        lastName:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reviews:{
            type:DataTypes.STRING
        }

    });

    return feedback;
}