const { DataTypes } = require("sequelize");
const blog = require("./blogs");
// const blogs=require('./blog');
module.exports=(sequelize, DataTypes)=>{
    const author= sequelize.define("author",{
        AuhtorId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        profileImageLink:{
            type:DataTypes.STRING,
            allowNull:false
        },
        shortDescription:{
            type:DataTypes.STRING,
            allowNull:false
        },
        detailedDescription:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    // const associate = function associate(models){
    //     author.hasMany(models.blog);
    //     
    // }
    // associate();
    return author;
}