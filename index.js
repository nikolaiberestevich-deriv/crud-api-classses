import express from "express"

const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`);
})