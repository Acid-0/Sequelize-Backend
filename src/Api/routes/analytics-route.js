const analytics = require("../controller/analytics-controller");

const router = require("express").Router();

router.post("/post", analytics.postAnalyticsController);
router.get("/get", analytics.getAnalyticsController);
router.get("/get-all", analytics.getAllAnalyticsController);
router.post("/delete", analytics.deleteAnalyticsController);

module.exports = router;
