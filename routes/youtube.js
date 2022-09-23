const router = require('express').Router()
const ytdl = require("ytdl-core")
const fs = require("fs")

const getData = async (url) => {
    const res = await ytdl.getBasicInfo(url);
    const { formats, videoDetails, ...others } = res
    return { formats, videoDetails }
}

router.get("/", async (req, res) => {
    const data = await getData(req.query.url)
    res.send(data)
})

module.exports = router