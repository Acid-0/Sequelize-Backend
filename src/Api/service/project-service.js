const sequeslize = require("../../config/database");
const { Sequelize } = require(`sequelize`);
const { project } = require("../../model");
const fs = require('fs');
const { project_image } = require("../../model");
const { isNullOrEmpty } = require("../../helper/helper-functions");
const { PROJECT_IMAGE_PATH } = require("../../helper/Constants");
const { projectMapper } = require("../../helper/mappers/project-mapper");


module.exports = {
    postProjectService,
    getProjectService,
    getAllProjectService,
    deleteProjectService,
};

async function postProjectService(model, images) {
    if (model.id == 0 || !model.id) {
        const project_res = await project.create(model);
        let projectId = project_res.id;

        if (!projectId) return null;

        const imagesToStore = images.map((image) => ({
            project_id: parseInt(projectId),
            image_path: PROJECT_IMAGE_PATH + '/' + image.filename,
        }));

        const project_image_res = await project_image.bulkCreate(imagesToStore);
        return projectMapper(project_res, project_image_res)

    } else if (model.id > 0) {
        const project_update_res = await project.update(model, { where: { id: model.id } });
        if (project_update_res[0] !== 1) return null;
        let images_to_delete = await project_image.findAll({
            where: {
                project_id: model.id
            }
        });
        if (images?.length > 0) {
            images_to_delete.forEach(img => {
                const path = "uploads/" + img.dataValues.image_path
                fs.unlink(path, (err => { if (err) console.log('image file not deleted', err); else console.log('image delete successfull.') }))
            });
            await project_image.destroy({ where: { project_id: model.id } });

            const imagesToStore = images.map((image) => ({
                project_id: parseInt(model.id),
                image_path: PROJECT_IMAGE_PATH + '/' + image.filename,
            }));
            const project_image_res = await project_image.bulkCreate(imagesToStore);
            if (!project_image_res) return [0];
        }
        return project_update_res;
    }
}

async function getProjectService(model) {
    if (model.id > 0) return project.findOne({
        where: { id: model.id },
        include: {
            model: project_image,
            attributes: ["image_path"],
            as: "images",
        }
    });
}
async function getAllProjectService(model) {
    if (!model.id) {
        const startIndex = (model.page - 1) * model.limit;
        return project.findAndCountAll({
            offset: startIndex,
            limit: model.limit,
            include: {
                model: project_image,
                attributes: ["image_path"],
                as: "images",
                required: false,
            },
        });
    }
}

async function deleteProjectService(model) {
    if (model.id > 0) {
        let images_to_delete = await project_image.findAll({
            where: {
                project_id: model.id
            }
        });

        images_to_delete.forEach(img => {
            const path = "uploads/" + img.dataValues.image_path
            fs.unlink(path, (err => { if (err) console.log('image file not deleted', err); else console.log('image delete successfull.') }))
        });
        await project_image.destroy({ where: { project_id: model.id } });

        let finalResponse = await project.destroy({ where: { id: model.id } });
        return finalResponse;
    }
    else return null;
}
