const project = require("../controller/project-controller");
const { PROJECT_IMAGE_PATH } = require("../../helper/Constants");
const multer = require("multer");

const router = require("express").Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/" + PROJECT_IMAGE_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    },
});

const upload = multer({ storage });

router.post("/post", upload.array("image_path", 5), project.postProjectController);
router.get("/get", project.getProjectController);
router.get("/get-all", project.getAllProjectController);
router.post("/delete", project.deleteProjectController);

module.exports = router;
