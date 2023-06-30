const express = require('express');
const motivation = require('motivation');
const ejs = require('ejs');
const coolImages = require('cool-images');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log(coolImages.one(1080, 1920));
    res.render("home.ejs", { motivation: motivation.get().text, author: motivation.get().author, imgUrl: coolImages.one(1080, 1920)});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
