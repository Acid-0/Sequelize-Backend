const sequeslize = require("../../config/database");
const { Sequelize } = require(`sequelize`);
const { contact } = require("../../model");
const { isNullOrEmpty } = require("../../helper/helper-functions");

module.exports = {
  postContactService,
  getContactService,
  getAllContactService,
  deleteContactService,
};

async function postContactService(model) {
  if (model.id === 0 || !model.id) {
    return contact.create(model);
  } else if (model.id > 0) {
    return contact.update(model, { where: { id: model.id } });
  }
}

async function getContactService(model) {
  if (model.id > 0) return contact.findOne({ where: { id: model.id } });
}
async function getAllContactService(model) {
  if (!model.id) {
    const startIndex = (model.page - 1) * model.limit;
    return contact.findAndCountAll({
      offset: startIndex,
      limit: model.limit,
    });
  }
}

async function deleteContactService(model) {
  if (model.id > 0) return contact.destroy({ where: { id: model.id } });
  else return null;
}
