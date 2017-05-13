module.exports = function(sequelize, Sequelize) {
    var Burger = sequelize.define("Burger", {
        name: { type: Sequelize.STRING },
        devoured: { type: Sequelize.BOOLEAN }
    });
    return Burger;
}