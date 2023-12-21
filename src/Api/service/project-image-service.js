const sequeslize = require("../../config/database");
const { Sequelize } = require(`sequelize`);
const { project_image } = require("../../model");
const { isNullOrEmpty } = require("../../helper/helper-functions");

module.exports = {
    postProjectImageService,
    getProjectImageService,
    getAllProjectImageService,
    deleteProjectImageService,
    getProjectImageByProjectIdService,
};

async function postProjectImageService(model) {
    if (model.id === 0 || !model.id) {
        return project_image.create(model);
    } else if (model.id > 0) {
        return project_image.update(model, { where: { id: model.id } });
    }
}

async function getProjectImageService(model) {
    if (model.id > 0) return project_image.findOne({ where: { id: model.id } });
}
async function getProjectImageByProjectIdService(model) {
    if (model.project_id > 0) return project_image.findOne({ where: { project_id: model.project_id } });
}
async function getAllProjectImageService(model) {
    if (!model.id) {
        const startIndex = (model.page - 1) * model.limit;
        return project_image.findAndCountAll({
            offset: startIndex,
            limit: model.limit,
        });
    }
}

async function deleteProjectImageService(model) {
    if (model.id > 0) return project_image.destroy({ where: { id: model.id } });
    else return null;
}
