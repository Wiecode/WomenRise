const connectToMongo =require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/UploadCourse',require('./routes/UploadCourse'))
app.use('/api/',require('./routes/Enroll'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}  `)
})
