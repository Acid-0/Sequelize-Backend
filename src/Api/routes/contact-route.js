const contact = require("../controller/contact-controller");

const router = require("express").Router();

router.post("/post", contact.postContactController);
router.get("/get", contact.getContactController);
router.get("/get-all", contact.getAllContactController);
router.post("/delete", contact.deleteContactController);

module.exports = router;
