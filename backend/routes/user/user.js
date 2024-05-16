const express = require('express');
const router = express.Router();
const { createUser, findRequiredSubs, findAllTakers, deleteUser, findUserById } = require('../../controllers/user');

router.post("/create", [], createUser);
router.get("/:srcode/required", [], findRequiredSubs);
router.get("/admin/all", [], findAllTakers);
router.delete("/:srcode/delete", [], deleteUser);
router.get("/:srcode/find", [], findUserById);

module.exports = router;
