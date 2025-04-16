const path = require('path');
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors());
app.use(express.static(path.join(__dirname,"/")));

app.get('/', (req, res) => {
  res.send('Hello World!');

})

app.get('/health', (req, res) => {
  res.sendStatus(200);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
