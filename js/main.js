/* 1. Una función equiposMayoresEdad que reciba un array de equipos y una edad,
   y que devuelva un array con los equipos asignados a personas mayores de esa edad */
function equiposMayoresEdad(array, edad) {
  const equiposMayores30 = array
    .map((equipos) => equipos.asignado.empleado)
    .filter((empleados) => empleados.edad > edad)
    .reduce((contador, empleado) => [...contador, empleado], []);
  return equiposMayores30;
}
/* 2. Una función equiposProvincia que reciba un array de equipos y una provincia,
   y que devuelva un array con los equipos asignados a personas de esa provincia. */
function equiposProvincia(array, provincia) {
  const equiposPorProvincia = array
    .map((equipos) => equipos.asignado)
    .filter(
      (asignado) => asignado.provincia.toUpperCase() === provincia.toUpperCase()
    )
    .map((asignado) => asignado.empleado)
    .reduce((contador, empleado) => [...contador, empleado], []);
  return equiposPorProvincia;
}
/* 3. Una función provincias que reciba un array de equipos
   y devuelva un array de provincias donde haya equipos. */
function provincias(array) {
  const provinciasDondeHayEquipos = array
    .map((equipos) => equipos.asignado.provincia)
    .filter((provincias, i) => provincias.indexOf(provincias) !== i)
    .reduce(
      (anteriorProvincia, provincia) =>
        anteriorProvincia.includes(provincia)
          ? anteriorProvincia
          : [...anteriorProvincia, provincia],
      []
    );

  return provinciasDondeHayEquipos;
}
/* 4.Una función puestos que reciba un array de equipos y devuelva un array de puestos
   de trabajadores con equipo asignado. */

function puestos(array) {
  const puestosDeTrabajo = array
    .map((equipos) => equipos.asignado.empleado)
    .reduce(
      (contador, empleado) =>
        empleado.nombre
          ? [...contador, `${empleado.nombre}  :  ${empleado.puesto}`]
          : contador,
      []
    );
  console.log(puestosDeTrabajo);
  return puestosDeTrabajo;
}
/* 5.Una función edadMedia que reciba un array de equipos y devuelva la media de edad 
   de trabajadores con equipo asignado. */
function edadMedia(array) {
  const edadMediaEmpleados = array
    .map((equipos) => equipos.asignado.empleado.edad)
    .reduce(
      (contador, edades, i, array) => edades / array.length + contador,
      0
    );
  return `${edadMediaEmpleados} años de media`;
}

/* 6.Una función equiposPorEdad que reciba un array de equipos y devuelva los equipos 
   ordenados por edad del trabajador, de más joven a más viejo. */
function equiposPorEdad(array) {
  const ordenEquipoPorEdad = array
    .map((equipos) => equipos.asignado.empleado)
    .sort((a, b) => {
      const edadA = a.edad;
      const edadB = b.edad;
      if (edadA > edadB) {
        return 1;
      }
      if (edadA < edadB) {
        return -1;
      }
      return 0;
    });

  return ordenEquipoPorEdad;
}
/* 7.Una función equiposTipo que reciba un array de equipos y un tipo, y que devuelva un 
   array con los equipos de ese tipo. */
function equiposTipo(array, tipo) {
  const equiposPorTipo = array
    .map((equipos) => equipos)
    .filter((equipo) => equipo.tipo.toUpperCase() === tipo.toUpperCase())
    .map((equipo) => equipo.asignado.empleado)
    .reduce((contador, empleado) => [...contador, empleado], []);
  return equiposPorTipo;
}
