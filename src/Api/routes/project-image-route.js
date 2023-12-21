const projectImage = require("../controller/project-image-controller");
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

router.post("/post", upload.single("image_path"), projectImage.postProjectImageController);
router.get("/get", projectImage.getProjectImageController);
router.get("/get-all", projectImage.getAllProjectImageController);
router.post("/delete", projectImage.deleteProjectImageController);

module.exports = router;
