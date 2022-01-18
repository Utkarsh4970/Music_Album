
const express = require("express");
const router = express.Router();
const Song = require("../models/song.model");

router.post("/", async function (req, res) {
    const songs = await Song.create(req.body);
    return res.send(songs);
})

router.get("/", async function (req, res) {
    const songs = await Song.find().lean().exec();
    return res.status(200).send({ songs });
})


router.delete("/:id", async function (req, res) {

    try {
        const songs = await Song.findByIdAndDelete(req.params.id);
        // console.log(req.params.id)
        return res.status(201).send({ songs });
    }
    catch (err) {
        console.log(err.message)
    }
})

module.exports = router;
