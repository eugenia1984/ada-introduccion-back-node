# :star: Express - API

---

## 1. Users

- Nos pidieron crear una pequeña API para gestionar un listado de usuarios

- Los endpoints que debe permitir son:

-**GET/users**: Retorna un array de personas guardadas en el servidor

-**POST/users**: Crea un nuevo registro en el servidor. Si la operación terminó satisfactoriamente, devuelve el nuevo registro creado.

-**PUT/users/:id**: Modifica los datos del usuario. El parámetro :id es la propiedad id del registro que queremos modificar.

-**DELETE/users/:id**: Elimina un registro de la base de datos. El parámetro :id es la propiedad id del registro que queremos eliminar.

- Los datos que nos pidieron almacenar de cada persona son:
```
Nombre
Email
Dirección
Teléfono
```

##  2 - Espotifai V1

- Queremos empezar a desarrollar un clon de Spotify, por lo que nos pidieron desarrollar una API CRUD para gestionar artistas.

- De cada artista conocemos los siguientes datos:
```
Nombre
Followers
Género
Imagen
ID
```

- Adicional a los endpoints anteriores, queremos agregar dos adicionales que nos permitan sumar o restar 1 follower

-```/artist/:id/follow```

-```/artist/:id/unfollow```

- Nos pasaron una lista de artistas iniciales para cargar en el sistema
```JavaScript
const artists = [
  { id: 1, name: "Nirvana", followers: 1987, genre: 'Grunge', image: 'https://picsum.photos/200?v=1' },
  { id: 2, name: "Foo Fighters", followers: 1994, genre: 'Rock', image: 'https://picsum.photos/200?v=2' },
  { id: 3, name: "Led Zeppelin", followers: 1967, genre: 'Hard Rock', image: 'https://picsum.photos/200?v=3' },
  { id: 4, name: "Queens of the Stone Age", followers: 1997, genre: 'Stoner', image: 'https://picsum.photos/200?v=4' },
  { id: 5, name: "Pearl Jam", followers: 1990, genre: 'Grunge', image: 'https://picsum.photos/200?v=5' },
    { id: 6, name: "Queen", followers: 2990, genre: 'Hard Rock', image: 'https://picsum.photos/200?v=6' },
];
```

---
