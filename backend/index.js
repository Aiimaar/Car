const express = require("express");

const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync( {force: true} ).then(() => {
    console.log("database already synced")
});

app.get("/", (req, res) => {
    res.json({ 
        message: "Welcome to my concessionaire application."
    });
});

require("./routes/car.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
