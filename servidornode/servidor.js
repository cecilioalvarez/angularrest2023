const express = require('express')
const app = express()
const port = 3000

let lista=["opcion1","opcion2","opcion3","opcion4"];

app.get('/menus', (req, res) => {
 res.send(lista);
})

app.listen(port, () => {
  console.log(`trabajando con express en el puerto ${port}`)
})