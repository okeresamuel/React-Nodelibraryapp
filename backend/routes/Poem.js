const express = require("express");
const router = express.Router();
const {
  get__poem,
  post__poem,
  patch__poem,
  delete__poem,
  get__allpoems,
  getfavourite__poem,
  postfavourite__poem,
  deletefavourite__poem
} = require("../controllers/Poem");
const { protect } = require("../middleware/protect");


router.get("/api/poems", protect, get__poem);
router.post("/api/poems", protect, post__poem);
router.patch("/api/poems/:id", protect, patch__poem);
router.delete("/api/poems/:id", protect, delete__poem);
router.get("/api/poems/general", get__allpoems);

// favourite poems
router.get("/api/poems/favourite", protect, getfavourite__poem);
router.post("/api/poems/favourite", protect, postfavourite__poem);
router.delete("/api/poems/favourite/:id", protect, deletefavourite__poem);


module.exports = router;
