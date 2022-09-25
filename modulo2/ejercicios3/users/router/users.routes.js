import express from 'express';
const router = express.Router();
import {
  agregarUsuario,
  obtenerUsuarios,
  eliminarUsuarios,
  editarUsuarios,
} from '../controller/users.controller.js';

router.get('/', obtenerUsuarios);

router.post('/', agregarUsuario);

router.delete('/:id', eliminarUsuarios);

router.put('/:id', editarUsuarios);

export default router;
