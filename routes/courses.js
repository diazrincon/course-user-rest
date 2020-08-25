var express = require('express');
var router = express.Router();

let courses = [];
let accumId = 0;

router.get('/', function(req, res, next) {
    res.status(200).send(courses);
});

router.get('/:id', function(req, res, next) {
    res.status(200).send(courses.find(course => course.id == req.params.id));
});

router.post('/', function (req, res, next) {
    var course = {
        id: ++accumId,
        name: req.body.name
    }
    courses.push(course);
    res.status(200);
});

router.put('/', function (req, res) {

});

router.delete('/:id', function (req, res) {

});

module.exports = router;
