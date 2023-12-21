module.exports = {
    projectMapper,
}

async function projectMapper(project_res, project_image_res) {
    // console.log('project', project_res)
    // console.log('image res', project_image_res)
    let data = {
        ...project_res.dataValues,
        images: project_image_res.map(img_res => ({
            id: img_res.dataValues.id,
            project_id: img_res.dataValues.project_id,
            image_path: img_res.dataValues.image_path,
        }))
    }
    return data;
}