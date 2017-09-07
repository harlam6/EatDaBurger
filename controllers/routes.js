var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
  burger.all (function (burger_data) {
  console.log(burger_data);
  res.render ('index')
  });
})

router.put ('/burgers/update', function (req, res) {
  burger.update (req.body.burger_id, function (result) {
  console.log (result);
  res.redirect ('/');
 });
});


// router.put ('/burgers/update', function (req, res) {
//   burger.update (req.body.burger_id, function (result) {
//     console.log(result);
//     res.redirect('/');
//   });
// });

// router.post("/burgers/create", function(req, res) {
//   burger.create(req.body.burger_name, function(result) {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     sleepy: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;
