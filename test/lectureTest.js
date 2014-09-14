/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */

module.exports = (function()  {

    var lecture = require('../lib/model/lecture.js');

    return {

        constructorWithLectureName: function (test) {
            var lectureName = "lectureTest";
            var testLecture = new lecture(lectureName);
            var now = new Date();
            var expected =  {
                name: lectureName,
                date: new Date(now.getFullYear(), now.getMonth(), now.getDate())
            };
            test.strictEqual(JSON.stringify(testLecture), JSON.stringify(expected));
            test.done();
        }
    };
})();