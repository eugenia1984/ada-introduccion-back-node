import dbUsers from '../dbUsuarios.js';

export function agregarUsuario(req, res) {
  const { nombre, email, dirección, teléfono } = req.body;
  dbUsers.agregarUsuario(nombre, email, dirección, teléfono);
  res.json({ message: 'Usuario agregado' });
}

export function obtenerUsuarios(req, res) {
  const arrayDeUsuarios = dbUsers.getUsuarios();
  res.json(arrayDeUsuarios);
}

export function eliminarUsuarios(req, res) {
  const { id } = req.params;
  dbUsers.eliminarUsuario(id);
  res.json({ message: 'Usuario eliminado' });
}

export function editarUsuarios(req, res) {
  const { id } = req.params;
  const { nombre, email, dirección, teléfono } = req.body;
  dbUsers.editarUsuario(id, nombre, email, dirección, teléfono);
  res.json({ message: 'Usuario editado' });
}
