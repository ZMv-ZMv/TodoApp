
// ****************************************************************************
// 26 - Initial Setup for App 1 ***********************************************
// ****************************************************************************

/* 

let express = require("express")
let app = express()
app.use(express.urlencoded({extended: false}))

app.get("/", function(req, res){
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do Aplicación</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body style="background-color: slategray;">
  <div class="container">
    <h1 class="display-4 text-center py-1">To-Do Aplicación</h1>
    
    <div class="jumbotron p-3 shadow-sm">
      <form action="/create-item" method="POST">
        <div class="d-flex align-items-center">
          <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
          <button class="btn btn-primary">Agregar Nuevo Ítem</button>
        </div>
      </form>
    </div>
    
    <ul class="list-group pb-5">
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">Ejemplo de ítem #1</span>
        <div>
          <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
          <button class="delete-me btn btn-danger btn-sm">Borrar</button>
        </div>
      </li>
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">Ejemplo de ítem #2</span>
        <div>
          <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
          <button class="delete-me btn btn-danger btn-sm">Borrar</button>
        </div>
      </li>
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">Ejemplo de ítem #3</span>
        <div>
          <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
          <button class="delete-me btn btn-danger btn-sm">Borrar</button>
        </div>
      </li>
    </ul>
    
  </div>
  
</body>
</html>
    `)
})

app.post("/create-item", function(req, res){
  console.log(req.body.item)
  res.send("Gracias por enviar el formulario")
})

app.listen(3000)
*/

// REPASO
/*
let express = require("express")
let app = express()

app.use(express.urlencoded({extended: false}))

app.get("/", function (req, res){
  res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple To-Do Aplicación</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      </head>
      <body style="background-color: slategray;">
        <div class="container">
          <h1 class="display-4 text-center py-1">✶ To-Do Aplicación ✶</h1>
          
          <div class="jumbotron p-3 shadow-sm">
            <form action="/create-item" method="POST">
              <div class="d-flex align-items-center">
                <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
                <button class="btn btn-primary">Agregar Nuevo Ítem</button>
              </div>
            </form>
          </div>
          
          <ul class="list-group pb-5">
            <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
              <span class="item-text">Ejemplo de ítem #1</span>
              <div>
                <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
                <button class="delete-me btn btn-danger btn-sm">Borrar</button>
              </div>
            </li>
            <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
              <span class="item-text">Ejemplo de ítem #2</span>
              <div>
                <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
                <button class="delete-me btn btn-danger btn-sm">Borrar</button>
              </div>
            </li>
            <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
              <span class="item-text">Ejemplo de ítem #3</span>
              <div>
                <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
                <button class="delete-me btn btn-danger btn-sm">Borrar</button>
              </div>
            </li>
          </ul>
          
        </div>
        
      </body>
      </html>
    `)
})

app.post("/create-item", function (req, res) {
  console.log(req.body.item)
  res.send("¡Gracias por enviar el formulario!")
})

app.listen(3000)
*/

// ****************************************************************************
// 29 - Connecting Node App to Database ***************************************
// 32 - Reading Data from a Database ******************************************
// 33 - Updating a Database Item Part 1 ***************************************
// ****************************************************************************

// https://github.com/axios/axios
// Using unpkg CDN:
// <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

/*
let express = require("express")
let {MongoClient} = require("mongodb")

let app = express()
let db

app.use(express.static("public"))

async function go() {
  let client = new MongoClient("mongodb+srv://todoAppUser:UserApptodo@cluster0.ch8pg.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster0")
  await client.connect()
  db = client.db()
  app.listen(3000)
}
go()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.get("/", async function (req, res){
  const items = await db.collection("items").find().toArray()
  
  res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple To-Do Aplicación</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      </head>
      <body style="background-color: slategray;">
        <div class="container">
          <h1 class="display-4 text-center py-1">✶ To-Do Aplicación ✶</h1>
          
          <div class="jumbotron p-3 shadow-sm">
            <form action="/create-item" method="POST">
              <div class="d-flex align-items-center">
                <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
                <button class="btn btn-primary">Agregar Nuevo Ítem</button>
              </div>
            </form>
          </div>
          
          <ul class="list-group pb-5">
            ${items.map(function(item){
              return `
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
              <span class="item-text">${item.text}</span>
              <div>
                <button class="edit-me btn btn-secondary btn-sm mr-1">Editar</button>
                <button class="delete-me btn btn-danger btn-sm">Borrar</button>
              </div>
            </li>
              `
            }).join("")
            }
          </ul>
          
        </div>
        
        <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
        <script src="/browser.js"></script>

      </body>
      </html>
    `)
})

app.post("/create-item", async function (req, res) {
  await db.collection("items").insertOne({text: req.body.item})
  res.redirect("/")
})

app.post("/update-item", function(req, res){
  console.log(req.body.text)
  res.send("Éxito")
})
*/

// ****************************************************************************
// 34 - Updating a Database Item Part 2 ***************************************
// ****************************************************************************

let express = require("express")
let {MongoClient, ObjectId} = require("mongodb")
let sanitizeHtml = require("sanitize-html")

let app = express()
let db

app.use(express.static("public"))

async function go() {
  let client = new MongoClient("mongodb+srv://todoAppUser:UserApptodo@cluster0.ch8pg.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster0")
  await client.connect()
  db = client.db()
  app.listen(3000)
}
go()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

function passwordProtected(req, res, next){ // usuario: todoapp  clave: TodoApp
  res.set("WWW-Authenticate", "Basic realm='Simple Todo App'")
  // console.log(req.headers.authorization)
  if (req.headers.authorization == "Basic dG9kb2FwcDpUb2RvQXBw") {
    next()
  } else {
    res.status(401).send("Error 401. Authentication required")
  }
}

app.use(passwordProtected)

app.get("/", async function (req, res){
  const items = await db.collection("items").find().toArray()
  
  res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple To-Do Aplicación</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      </head>
      <body style="background-color: slategray;">
        <div class="container">
          <h1 class="display-4 text-center py-1">✶ To-Do Aplicación ✶</h1>
          
          <div class="jumbotron p-3 shadow-sm">
            <form id="create-form" action="/create-item" method="POST">
              <div class="d-flex align-items-center">
                <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
                <button class="btn btn-primary">Agregar Nuevo Ítem</button>
              </div>
            </form>
          </div>
          
          <ul id="item-list" class="list-group pb-5">
          </ul>
          
        </div>
        
        <script>
          let items = ${JSON.stringify(items)}
        </script>

        <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
        <script src="/browser.js"></script>

      </body>
      </html>
    `)
})

app.post("/create-item", async function (req, res) {
  let safeText = sanitizeHtml(req.body.text, {allowedTags: [], allowedAttributes: {}})
  const info = await db.collection("items").insertOne({text: safeText})
  res.json({_id: info.insertedId, text: safeText})
})

app.post("/update-item", async function(req, res){
  let safeText = sanitizeHtml(req.body.text, {allowedTags: [], allowedAttributes: {}})
  await db.collection("items").findOneAndUpdate({_id: new ObjectId(req.body.id)}, {$set: {text: safeText} })
  res.send("Éxito")
})

app.post("/delete-item", async function(req, res){
  await db.collection("items").deleteOne({_id: new ObjectId(req.body.id)})
  res.redirect("/")
})
