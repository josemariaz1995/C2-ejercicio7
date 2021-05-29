//1. Una función equiposMayoresEdad que reciba un array de equipos y una edad,
//   y que devuelva un array con los equipos asignados a personas mayores de esa edad
function equiposMayoresEdad(array, edad) {
  const equiposMayores30 = array
    .map((equipos) => equipos.asignado)
    .map((asignados) => asignados.empleado)
    .filter((empleados) => empleados.edad > edad);
  return equiposMayores30;
}
//2. Una función equiposProvincia que reciba un array de equipos y una provincia,
//   y que devuelva un array con los equipos asignados a personas de esa provincia.
function equiposProvincia(array, provincia) {
  const provinciaBienPuesta =
    provincia.charAt(0).toUpperCase() + provincia.slice(1);
  const equiposPorProvincia = array
    .map((equipos) => equipos.asignado)
    .filter((asignado) => asignado.provincia === provinciaBienPuesta);
  return equiposPorProvincia;
}
//3. Una función provincias que reciba un array de equipos
//   y devuelva un array de provincias donde haya equipos.
function provincias(array) {
  const provinciasDondeHayEquipos = array
    .map((equipos) => equipos.asignado.provincia)
    .filter((provincias) => provincias);
  const limpiarProvinciasRepetidas = [];
  for (let i in provinciasDondeHayEquipos) {
    limpiarProvinciasRepetidas = limpiarProvinciasRepetidas.push(
      provinciasDondeHayEquipos[i]
    );
    if (provinciasDondeHayEquipos.includes(i) == i) {
      limpiarProvinciasRepetidas.splice(i);
    }
  }
  return limpiarProvinciasRepetidas;
}
