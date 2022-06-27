const Router = require("express");
const router = Router();
const controller = require('./../controllers/controller');

router.get("/", controller.home);

router.post("/", controller.login);

router.get("/domain", controller.domain);

router.get("/domains", controller.domains);

router.get("/cilist", controller.cilist);

router.get("/server", controller.server);

router.get('/servervalidation', controller.servervalidation);

router.post("/email", controller.email);

module.exports = router;
