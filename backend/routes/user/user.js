const express = require('express');
const router = express.Router();
const { createUser, findRequiredSubs, findAllTakers } = require('../../controllers/user');

router.post("/create", [], createUser);
router.get("/:srcode/required", [], findRequiredSubs);
router.get("/admin/all", [], findAllTakers);

module.exports = router;
