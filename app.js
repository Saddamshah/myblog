const express = require('express')
const app = express();
const PORT = process.env.PORT || 5050

app.set("view engine","ejs");

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/blog/1', (req, res) => {
    res.render('first-blog')
})

app.get('/blog/2', (req, res) => {
    res.render('second-blog')
})

app.get('/blog/3', (req, res) => {
    res.render('third-blog')
})

app.listen(PORT, () => console.log(`you server is running`))