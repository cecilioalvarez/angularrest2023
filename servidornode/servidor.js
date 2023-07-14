const express = require('express')
const app = express()
const port = 3000
const cors=require("cors");
app.use(cors());
let lista=["opcion1","opcion2","opcion3","opcion4"];

let facturas=[];
facturas.push({numero:"1",concepto:"ordenador",importe:200});
facturas.push({numero:"2",concepto:"tablet",importe:300});
facturas.push({numero:"3",concepto:"auricular",importe:200});
facturas.push({numero:"4",concepto:"monitor",importe:500});


app.get('/menus', (req, res) => {
 res.send(lista);
})


app.get('/facturas', (req, res) => {
  res.send(facturas);
 })
 
app.listen(port, () => {
  console.log(`trabajando con express en el puerto ${port}`)
})