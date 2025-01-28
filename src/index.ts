import express from 'express'
import { TestController } from './controller'


const app = express()
const port = 3000

app.get('/hello', (req, res) => TestController.helloEmre())

app.get('/', (req, res) => {
    res.send('Merhaba Emre SEFEROGLU')
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})  