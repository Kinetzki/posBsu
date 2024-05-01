const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/main-route");
const cors = require("cors");
const sequelizeConnect = require("./connection/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", routes);
app.use("*", (req, res, next) => {
  res.status(404).json({ success: false, message: "Resource unavailable." });
});

sequelizeConnect
  .sync({
    force: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started @ PORT ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT;
