const { DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes)=>{
    const movieQuotes= sequelize.define("movieQuotes",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        authorName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        quotes:{
            type:DataTypes.STRING,
            allowNull:false,
            Uniquely:true
        }

    });


    return movieQuotes;
}