const sequeslize = require("../../config/database");
const { Sequelize } = require(`sequelize`);
const { analytics } = require("../../model");
const { isNullOrEmpty } = require("../../helper/helper-functions");

module.exports = {
    postAnalyticsService,
    getAnalyticsService,
    getAllAnalyticsService,
    deleteAnalyticsService,
};

async function postAnalyticsService(model) {
    if (model.id === 0 || !model.id) {
        return analytics.create(model);
    } else if (model.id > 0) {
        return analytics.update(model, { where: { id: model.id } });
    }
}

async function getAnalyticsService(model) {
    if (model.id > 0) return analytics.findOne({ where: { id: model.id } });
}
async function getAllAnalyticsService(model) {
    if (!model.id) {
        const startIndex = (model.page - 1) * model.limit;
        return analytics.findAndCountAll({
            offset: startIndex,
            limit: model.limit,
        });
    }
}

async function deleteAnalyticsService(model) {
    if (model.id > 0) return analytics.destroy({ where: { id: model.id } });
    else return null;
}
