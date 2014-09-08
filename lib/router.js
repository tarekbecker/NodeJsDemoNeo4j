/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */
var course = require('./model/course.js');
var lecture = require('./model/lecture.js');

function router(expressApp) {
    var router = expressApp.Router();

    router.use(function(req, res, next) {
        // do logging
        console.log("Request received");
        next(); // make sure we go to the next routes and don't stop here
    });

    // GET /WISEA12
    router.route('/:courseId').get(
        function (req, res) {
            var reqCourse = new course(req.params.courseId);
            res.json(reqCourse);
        }
    );

    // POST /WISEA12
    router.route('/:courseId').post(
        function (req, res) {
            console.log("A new course should be created with name: " + req.params.courseId + " and room " + req.body.room);
            var newCourse = new course(req.params.courseId, req.body.room);
            console.log(JSON.stringify(newCourse));
            res.status(201).end();
        }
    );

    // GET /WISEA12/IT-S
    router.route('/:courseId/:lecture').get(
        function (req, res) {
            var reqCourse = new course(req.params.courseId);
            reqCourse.lecture = new lecture(req.params.lecture);
            res.json(reqCourse);
        }
    );

    return router;
}

module.exports = router;
