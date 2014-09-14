/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */

module.exports = (function() {

    var app     = require('../../lib/server.js')(true),
        request = require('supertest')(app),
        course  = require('../../lib/model/course.js');

    var courseName = "testCourse";
    var lectureName = "lectureName";

    var checkResponseHeader = function(response, status) {
        status = status || 200;
        response
            .expect(status)
            .expect('Content-Type', 'application/json');
        return response;
    };

    return {

        testGetCourseById: function (test) {
            var expectedResponse = {
                courseId: courseName,
                room: '240b'
            };

            checkResponseHeader(request.get('/courses/' + courseName))
                .end(function (err, res) {
                    if (err) {
                        test.fail(err);
                        test.done();
                        return;
                    }
                    test.strictEqual(JSON.stringify(res.body), JSON.stringify(expectedResponse));
                    test.done();
                });
        },
        testPostLectureOfCourse: function(test) {
            var newCourse = new course(courseName);
            request
                .post('/courses')
                .send(newCourse)
                .expect(201)
                .end(function (err) {
                    if (err) {
                        test.ok(false, err);
                        test.done();
                        return;
                    }
                    test.done();
                });
        }
    }
})();