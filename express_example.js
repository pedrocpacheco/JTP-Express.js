let express = require('express')
let app = express()

app.get('/', (req, res) => { res.send('Welcome to JavaTPoint') })

const PORT = 8000

let server = app.listen(PORT, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`Running at https://${host}:${port}`);
})