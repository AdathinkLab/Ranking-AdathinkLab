const { Router } = require("express")
const router = Router()
const path = require("path")
const controller = require("./../../controller/landing/index")

router.get("/", controller.getlandingMainView)

module.exports = router