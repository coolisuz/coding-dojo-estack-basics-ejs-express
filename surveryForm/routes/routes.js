module.exports = function Route(app){
    app.get("/", (req, res) => {
      res.render("index");
    });

    app.post("/result", (req, res) => {
      student = {
        name: req.body.name,
        location: req.body.location,
        favLanguage: req.body.favLanguage,
        comment: req.body.comment
      };
      res.render("result", {student: student});
    });



    
}