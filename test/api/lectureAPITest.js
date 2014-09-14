/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */
/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */

module.exports = (function() {

    var app     = require('../../lib/server.js')(true),
        request = require('supertest')(app);

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

        testGetLectureOfCourse: function (test) {
            var now = new Date();
            var expectedResponse = {
                courseId: courseName,
                room: "240b",
                lecture: {
                    name: lectureName,
                    date: new Date(now.getFullYear(), now.getMonth(), now.getDate())
                }
            };
            checkResponseHeader(request.get('/courses/' + courseName + "/" + lectureName))
                .end(function (err, res) {
                    if (err) {
                        test.fail(err);
                        test.done();
                        return;
                    }
                    test.strictEqual(JSON.stringify(res.body), JSON.stringify(expectedResponse));
                    test.done();
                });
        }
    };

})();