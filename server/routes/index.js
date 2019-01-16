const express = require("express");
const router = express.Router();
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

router.get("/movies/:id", (req, res) => {
  const actualPage = "/secret";
  const queryParams = { id: req.params.id };
  app.render(req, res, actualPage, queryParams);
});

module.exports = router;
