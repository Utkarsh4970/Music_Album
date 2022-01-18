const express=require("express");

const router=express.Router();

const Album=require("../models/album.model");

router.post("/",async function(req,res){
    const albums=await Album.create(req.body);
    return res.send(albums);
})

router.get("/",async function(req,res){

    const page=+req.query.page || 1;
    const size=+req.query.limit || 3;
    const offset=(page-1)*size;

    const albums=await Album.find().skip(offset).limit(size).lean().exec();
    const albumlength= await Album.find().count()
   // console.log(albumlength)
    return res.status(200).send({albums,albumlength});
})

// router.get("/pag",async function(req,res){


//     const albums=await Album.find().lean().exec();
    
//     return res.status(200).send({albums});
// })
  router.put("/:id", async function (req, res) {

    try {
        const albums = await Album.findByIdAndUpdate(req.params.id,req.body);
         console.log(req.params.id,req.body.song)
        return res.status(201).send({ albums });
    }
    catch (err) {
        console.log(err.message)
    }
})
// router.put('/:id', (req, res) => {
//     Album.findByIdAndUpdate(req.params.id, req.body)
//      .then(album => res.json({ msg: 'Updated successfully' }))
//      .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//      );
//    });
   

router.delete("/:id", async function (req, res) {

    try {
        const albums = await Album.findByIdAndDelete(req.params.id);
        // console.log(req.params.id)
        return res.status(201).send({ albums });
    }
    catch (err) {
        console.log(err.message)
    }
})


module.exports=router;
