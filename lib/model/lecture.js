/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */
module.exports = function(name) {
    var now = new Date();
    this.name = name;
    this.date = new Date(now.getFullYear(), now.getMonth(), now.getDate())
};