const { DataTypes, BelongsTo } = require("sequelize");
// const author=require('./author');
module.exports=(sequelize, DataTypes)=>{

    const blogs= sequelize.define("blogs",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            auto_Increment:true
        }, 
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        shortDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        bannerImgLink:{
            type:DataTypes.STRING,
            allowNull:false
        },
        readTime:{
            type:DataTypes.STRING,
            allowNull:false
        },
        uploadTime:{
            type:DataTypes.DATE,
            allowNull:false
        },
        fullDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        fullDescription1:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        fullDescription2:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        tags:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    // blogs.hasOne(AuthorId);
    return blogs;
}