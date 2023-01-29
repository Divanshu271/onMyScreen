const db = require("../database/models");
const Sequelize=require("sequelize")

module.exports = {
  getOne: async(req, res) => {

    try {
      let id=req.params.id;
      if (id!=""){
          let bg1 = await db.blogs.findOne({
            where: { id },
            include:[{
              model:db.author
            }]
        });
        let bg2=await db.blogs.findAll({
          where :{id : {[Sequelize.Op.ne]:bg1.id}},
          limit : 2
        })
        /*
        let blogs > findall.blogs(where blogid: [op.ne] : currentblogid, limit: 2)
        bg1.blogs = blogs
        */
        let articles={bg1,bg2}
        if(articles){
          res.status(200).send(articles)
        }else{
          return res.status(400).send ('No blog with such id')
        }
        
      }
    } catch (error) {
      console.log(error);
      return res.status(404).send(err.message)
    }
  
}
}