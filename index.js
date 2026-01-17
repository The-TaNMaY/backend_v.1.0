require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send('the_tanmay_67')
})

app.get('/login',(req,res) =>{
  res.send('<h1>Please Login To Stark Industries</h1>')
})

app.get('/youtube',(req,res) =>{
  res.send('<h2>Tanmay67</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
