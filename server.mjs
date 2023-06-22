import express from 'express';

const app = express()


app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
    res.send('Hello World!' + new Date());
})

app.get('/profile', (req, res) => {
  console.log('This is profile!', new Date());
  res.send('This is profile!' + new Date());
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})