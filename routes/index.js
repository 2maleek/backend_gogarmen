const router = require("express").Router();
const Controller = require("../controllers");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/v1/auth/login", Controller.login);
router.get("/v1/auth/logout", Controller.logout);

router.use(authentication);
// Branches routes
router.post("/v1/branches", authorization, Controller.createBranch); //create
router.put("/v1/branches/:branchId", authorization, Controller.updateBranch); //update by id
router.delete("/v1/branches/:branchId", authorization, Controller.deleteBranch); //delete by id
router.get("/v1/branches", authorization, Controller.findAllBranchs); //read all

// Studios routes
router.post("/v1/studios", authorization, Controller.createStudio); //create
router.put("/v1/studios/:studioId", authorization, Controller.updateStudio); //update by id
router.delete("/v1/studios/:studioId", authorization, Controller.deleteStudio); //delete by id
router.get("/v1/studios", authorization, Controller.findAllStudios); //read all

// Movies routes
router.post("/v1/movies", authorization, Controller.createMovie); //create
router.put("/v1/movies/:movieId", authorization, Controller.updateMovie); //update by id
router.delete("/v1/movies/:movieId", authorization, Controller.deleteMovie); //delete by id
router.get("/v1/movies", authorization, Controller.findAllMovies); //read all

// Schedule routes
// router.post("/v1/schedules", authorization, Controller.createSchedule); //create
// router.put(
// 	"/v1/schedules/:scheduleId",
// 	authorization,
// 	Controller.updateSchedule
// ); //update by id
// router.delete(
// 	"/v1/schedules/:scheduleId",
// 	authorization,
// 	Controller.deleteSchedules
// ); //delete by id
// router.get("/v1/schedules", authorization, Controller.findAllSchedules); //read all
// router.get("/v1/available-schedules");
module.exports = router;
