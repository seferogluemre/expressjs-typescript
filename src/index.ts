import express from 'express'
import { helloWorld } from './controller'


const app = express()
const port = 3000

app.get('/hello', (req, res) => helloWorld())

app.get('/', (req, res) => {
    res.send('Merhaba Emre SEFEROGLU')
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})