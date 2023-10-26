const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    backgroundImg:String,
    cardImg:String,
    description:String,
    subTitle:String,
    title:String,
    titleImg:String,
    type:String
})

const movies = mongoose.model('movies',movieSchema);
module.exports = movies;
