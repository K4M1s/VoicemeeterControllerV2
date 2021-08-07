require("dotenv").config();
const express = require('express');
const vmConnect = require("./src/vmConnect");
const apiRouter = require("./src/routes/index");
const app = express();

app.use(express.json());

app.use("/api", apiRouter);

vmConnect()
    .then(() => {
        app.listen(process.env.PORT, () => {console.log(`listening on port: ${process.env.PORT}`);});
    })
    .catch(err => console.error(err));
