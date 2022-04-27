// backend/routes/api/session.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Song } = require('../../db/models');


const router = express.Router();
//*-----------------------------------------------------------

// Get home page with discover songs //api/discover
router.get('/', asyncHandler(async function (req, res) {
  console.log("🍊🍊🍊🍊🍊");
  res.send("Discover World!!")
  
  // const songs = await Song.findAll({include: [
  //     {model: Song},
  // ]})

  // console.log(songs);
  // return res.json(songs)
  // res.redirect('http://google.com')
}));

module.exports = router;