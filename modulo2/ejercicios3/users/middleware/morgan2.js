export default function morgan2(peticiones, respuesta, next) {
  console.log(`Peticion ${peticiones.method} a ${peticiones.url}`);
  next();
}
