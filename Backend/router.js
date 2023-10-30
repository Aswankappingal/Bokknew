import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/display").post(controller.gettask)
router.route("/movies").get(controller.getdata)
router.route("/movieDetails/:id").post(controller.getdetails)
    // res.status(200).send("this is controller"))
export default router;