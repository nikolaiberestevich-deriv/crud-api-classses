import express, { Request, Response, NextFunction } from "express"
import { userRouter } from './users/users.js'

const port = 8000
const app = express()

app.use((req, res, next) => {
    console.log("middleware for app")
    next()
})

app.get('/hello', (req, res) => {

    res.send("hello")
})
//next -if we add next - app will go to the next methods after using app.all   
//all -like middleware  
// app.all('/hello', (req, res, next) => {
//     console.log("All")
//     next()
// })
app.use('/users', userRouter)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message)
    res.status(500).send(err.message)
})

app.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`);
})