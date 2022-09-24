const express = require('express');
const app = express();
const path = require('path');
const youtube = require("./routes/youtube")

const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, "public")))
app.use("/youtube", youtube)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("pages/index")
})

app.get("/download", (req, res) => {
    res.render("pages/download")
})


app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
})