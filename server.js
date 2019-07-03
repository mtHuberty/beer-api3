const express = require('express')
const app = express()
const beerRouter = require('./routes/beerRouter')

app.use('/beers', beerRouter)

// Catch all/base route
app.use('/', (req, res) => {
    res.send('You hit the base route!')
})

const port = process.env.PORT || 9999
app.listen(port, () => {
    console.log('Listening on port 9999...')
})