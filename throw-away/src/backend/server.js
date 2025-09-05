import express from 'express'
//import dotnev from "dotenv"

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('This is the backend server that will handle data structure, error handling, and database mangement')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
