const express = require('express')
const app = express()
const port = 4000
const routes = require("./routes") // new

app.use(express.json())
app.use("/api", routes) // new

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})