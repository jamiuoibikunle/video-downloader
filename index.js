const app = require("express")()
const youtube = require("./routes/youtube")

const PORT = process.env.PORT || 8080

app.use("/youtube", youtube)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})