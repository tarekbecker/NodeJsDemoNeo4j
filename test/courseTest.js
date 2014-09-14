/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */
var course = require('../lib/model/course.js');

module.exports = {

    constructorDefaultRoom: function(test) {
        var courseName = "TestCourse";
        var testCourse = new course(courseName);
        var expected = {
            courseId: courseName,
            room: "240b"
        };
        test.strictEqual(JSON.stringify(testCourse), JSON.stringify(expected));
        test.done();
    },

    constructorSpecificRoom: function(test) {
        var courseName = "TestCourse";
        var room = "100Test";
        var testCourse = new course(courseName, room);
        var expected = {
            courseId: courseName,
            room: room
        };
        test.strictEqual(JSON.stringify(testCourse), JSON.stringify(expected));
        test.done();
    }

};