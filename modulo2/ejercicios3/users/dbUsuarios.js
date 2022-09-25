let id = 3; // para los id de los nuevos ussuarios qu la incremento de 1 en 1

const usuarios = [
  {
    id: 1,
    nombre: 'ian',
    email: 'rivas.ian.javier@gmail.com',
    dirección: 'calle 1',
    teléfono: '1234567890',
  },
  {
    id: 2,
    nombre: 'Grecia',
    email: 'grecia@gmail.com',
    dirección: 'calle 5',
    teléfono: '12345671123',
  },
];

function getUsuarios() {
  return usuarios;
}

function agregarUsuario(nombre, email, dirección, teléfono) {
  const usuario = {
    id: id,
    nombre,
    email,
    dirección,
    teléfono,
  };
  usuarios.push(usuario);
  id++;
}

function eliminarUsuario(id) {
  const index = usuarios.findIndex((usuario) => usuario.id === Number(id));
  if (index !== -1) {
    usuarios.splice(index, 1); //splice elimina un elemento del array (desde que indice, cuantos elementos)
  }
}

function editarUsuario(id, nombre, email, dirección, teléfono) {
  const index = usuarios.findIndex((usuario) => usuario.id === Number(id));
  if (index !== -1) {
    usuarios[index].nombre = nombre;
    usuarios[index].email = email;
    usuarios[index].dirección = dirección;
    usuarios[index].teléfono = teléfono;
  }
}

export default { 
  getUsuarios, 
  agregarUsuario, 
  eliminarUsuario, 
  editarUsuario 
};
