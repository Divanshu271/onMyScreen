const { DataTypes } = require("sequelize");

module.exports=(sequelize, DataTypes)=>{
    const favouriteMovies= sequelize.define("favouriteMovies",{
    //    id?? 
       id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        title:{
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
        }
    });


    return favouriteMovies;
}