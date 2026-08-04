const express = require("express");
const router = express.Router();

const { createMessage, getMessages } = require("../controller/MessageController");

router.get("/", getMessages);

router.post("/", createMessage);

module.exports = router;