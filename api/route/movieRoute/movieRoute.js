const router = require("express").Router();
const movies = require("../../model/movies");

router.post("/register", async (req, res) => {
  const { backgroundImg, cardImg, description, subTitle, title, titleImg, type } =
    req.body;
  let movie = await movies.findOne({ title }).maxTimeMS(20000);
  if (movie) {
    return res.status(403).json({ error: "already registered" });
  } 
  
  const data = {
    backgroundImg, 
    cardImg,
    description, 
    subTitle,
    title,
    titleImg,
    type,
  };
 
  movie = await movies.create(data);
  console.log(movie)
  return res.status(200).json(movie.toJSON());
});
router.get('/',async (req, res)=>{
  const movie = await movies.find({})
  return res.status(200).json(movie);
})
module.exports = router;
