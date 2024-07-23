const express = require('express');
const bodyParser = require('body-parser');
//const db = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const TabUser = require('./tablasTemp/TabUsers');
const TabCalif = require('./tablasTemp/TabCalificaciones');
const TabTareas = require('./tablasTemp/TabTareas');
const TabPagosAdedudos = require('./tablasTemp/TabPagosAdeudos');

// // Ruta para obtener datos
// app.get('/api/data', (req, res) => {
//   db.query('SELECT * FROM tu_tabla', (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err });
//     }
//     res.json(results);
//   });
// });

// // Ruta para agregar datos
// app.post('/api/data', (req, res) => {
//   const { campo1, campo2 } = req.body;
//   db.query('INSERT INTO tu_tabla (campo1, campo2) VALUES (?, ?)', [campo1, campo2], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err });
//     }
//     res.json({ message: 'Data added successfully', id: results.insertId });
//   });
// });



const sp_validar_usuario = (username, password) => {
  return TabUser.users.filter(user => user.username == username && user.password == password && user.activo == true);
}

app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ mensaje: 'Se requiere nombre de usuario y contraseña' });
  }

  const result = sp_validar_usuario(parseInt(username), password);

  if (result.length > 0) {
    res.json({ mensaje: '', tabla: result[0] });
  } else {
    res.json({ mensaje: 'Usuario invalido o contraseña invalida' });
  }
});

const sp_obtener_calificaciones = (username) => {
  return TabCalif.filter(result => result.username == username);
}

app.post('/api/calificaciones', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.json({ mensaje: 'Se requiere Usuario' });
  }

  const result = sp_obtener_calificaciones(parseInt(username));

  if (result.length > 0) {
    res.json({ mensaje: '', tabla: result });
  } else {
    res.json({ mensaje: 'No se encontro calificaciones' });
  }
})

const sp_obtener_tareas = (username) => {
  return TabTareas.filter(result => result.username == username);
}

app.post('/api/tareas', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.json({ mensaje: 'Se requiere Usuario' });
  }

  const result = sp_obtener_tareas(parseInt(username));

  if (result.length > 0) {
    res.json({ mensaje: '', tabla: result });
  } else {
    res.json({ mensaje: 'No se encontro tareas' });
  }
})

const sp_obtener_adeudos = (username) => {
  return TabPagosAdedudos.filter(result => result.username == username);
}

app.post('/api/adeudos', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.json({ mensaje: 'Se requiere Usuario' });
  }

  const result = sp_obtener_adeudos(parseInt(username));

  if (result.length > 0) {
    res.json({ mensaje: '', tabla: result });
  } else {
    res.json({ mensaje: 'No se encontro adeudos' });
  }
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
