
const db = require("../database/models");
// let perPage=req.body.perPage;
// let pageNo=req.body.pageNo;
// perPage=parseInt(perPage);
// pageNo=parseInt(pageNo);
module.exports = {

    // change name to getBlogs
  get: async(req, res) => {

    try {
      let perPage = req.query.perPage;
      let pageNo = req.query.pageNo;
      perPage = parseInt(perPage);
      pageNo = parseInt(pageNo);
      let offset = perPage*(pageNo-1)
      const bg = await db.blogs.findAll();
      console.log(bg);
      if (bg.length) {
        res.status(200).send(bg);
        console.log("success");
      } else {
        res.status(200).send("no blogs there");
        console.log("failure");
      }
    
    } catch (error) {
      console.log(error);
    }
  
}
}

