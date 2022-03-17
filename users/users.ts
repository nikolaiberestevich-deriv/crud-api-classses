import express from "express"

const userRouter = express.Router()

//for router
userRouter.use((req, res, next) => {
    console.log("middleware for app")
    next()
})

userRouter.post('/login', (req, res) => {
    res.send('login')
})


userRouter.post('/register', (req, res) => {
    res.send('register')
})
export { userRouter }