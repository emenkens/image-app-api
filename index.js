const express = require('express')
const app = express()

const fs = require('fs')
const _ = require('lodash')
const formidable = require('formidable')

app.use(express.static('images'))

app.get('/', (req, res) => res.send('Hello, world!'))

app.get('/api/random', (req, res) => res.sendFile('/images/' + _.sample(fs.readdirSync('/images'))))
app.get('/api/upload', (req, res) => res.sendFile(__dirname + '/form.html'))

app.post('/api/upload', (req, res) => {
    new formidable.IncomingForm()
                  .parse(req)
                  .on('fileBegin', (name, file) => {
                      file.path = '/images/' + (new Date).getTime() + file.name
                  })
                  .on('file', (name, file) => true)

    return res.redirect('/api/upload')
})

app.listen(3000)
