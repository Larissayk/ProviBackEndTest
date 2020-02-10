const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

//Rotas

//Register User
router.post("/signup", controller.postSignup);


router.use(authMiddleware) //tudo que estiver abaixo, precisa de token.

//CPF
router.post("/CPF/:id", controller.postCPF);


// //FullName
router.post("/fullname/:id", controller.postFullnamePerUser);

// //Birthday
router.post("/birthday/:id", controller.postBdayPerUser);

// //Phone Number
router.post("/phone/:id", controller.postPhonePerUser);

// //Address
router.post("/address/:id", controller.postAddressPerUser);

// //Amount Requested
router.post("/amount/:id", controller.postRequestedAmount);


module.exports = router;