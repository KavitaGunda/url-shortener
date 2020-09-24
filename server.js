const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ShortUrl = require('./models/shortUrl');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({
        short: req.params.shortUrl
    });
    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Url shortener app successfully started and listening at : http://localhost:${port}`));