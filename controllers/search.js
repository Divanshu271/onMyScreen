const Sequelize=require('sequelize')
const db = require('../database/models')
const blogs=require ('../database/models/blogs');
module.exports={
    search:async(req,res)=>{
        let searchString = {q} = req.query
        console.log(searchString,q)
        if (searchString!=""){
            let blogs = db.blogs.findAll({
                where:
                {title:
                    { [Sequelize.Op.iLike]: req.query.search}
            }
            })
            if(blogs){
                return blogs
                }else{
                    res.status(200).send("No Match found");
            }
        }else{
            res.send('enter the string you want to search')
        }
    }
}