const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Hello ka')
})

app.get("/about", (req, res) => {
    res.send('Hello from About Page')
})

app.listen(3000, () => {
    console.log("Start Server at Port Port [3000]")
})

app.get('*', (req, res) => {
    console.log('Error:404 Page Not Found')
})
