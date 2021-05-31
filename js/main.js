/* 1. Una función equiposMayoresEdad que reciba un array de equipos y una edad,
   y que devuelva un array con los equipos asignados a personas mayores de esa edad */
function equiposMayoresEdad(array, edad) {
  const equiposMayores30 = array
    .filter((equipo) => equipo.asignado.empleado.edad > edad)
    .reduce((contador, equipo) => [...contador, equipo], []);
  return equiposMayores30;
}
/* 2. Una función equiposProvincia que reciba un array de equipos y una provincia,
   y que devuelva un array con los equipos asignados a personas de esa provincia. */
function equiposProvincia(array, provincia) {
  const equiposPorProvincia = array
    .filter(
      (equipos) =>
        equipos.asignado.provincia.toUpperCase() === provincia.toUpperCase()
    )
    .reduce((contador, equipo) => [...contador, equipo], []);
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
  const ordenEquipoPorEdad = array.sort((a, b) => {
    const edadA = a.asignado.empleado.edad;
    const edadB = b.asignado.empleado.edad;
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
    .filter((equipo) => equipo.tipo.toUpperCase() === tipo.toUpperCase())
    .reduce((contador, equipo) => [...contador, equipo], []);
  return equiposPorTipo;
}
/* 8. Una función trabajadoresTipo que reciba un array de equipos y un tipo, y que devuelva un
   array de trabajadores con equipo de ese tipo asignado. */
function trabajadoresTipo(array, tipo) {
  const trabajadoresPorTipo = array
    .filter((equipo) => equipo.tipo.toUpperCase() === tipo.toUpperCase())
    .map((equipo) => equipo.asignado.empleado)
    .reduce((contador, empleado) => [...contador, empleado.nombre], []);
  return trabajadoresPorTipo;
}
/*   9.Una función equiposPorTipo que reciba un array de equipos y que devuelva un array de equipos organizados por tipo, con esta  
function equiposPorTipo(array) {
  const equiposEnTipo = array.reduce(
    (contador, equipos) => [
      ...contador,
      `Tipo: ${equipos.tipo}`,
      `equipos: ${array.filter((equipo) => equipo === equipos.tipo)}`,
    ],
    []
  );
  return equiposEnTipo;
} */
function equiposPorTipo(array) {
  const equiposEnTipo = array
    .map((equipos) => equipos.tipo)
    .filter((tipo, i) => tipo.indexOf(tipo) !== i)
    .reduce(
      (anteriorTipo, tipo, i) =>
        anteriorTipo.includes(tipo)
          ? anteriorTipo
          : [
              ...anteriorTipo,
              {
                tipo,
                equpipos: array.filter((equipo) => equipo.tipo === tipo),
              },
            ],
      []
    );
  return equiposEnTipo;
}

/*  10.Una función equiposTipoLocalidad que reciba un array de equipos, un tipo y una localidad,
     y que devuelva un array de equipos de ese tipo y asignados a trabajadores de esa provincia. */
const equiposTipoLocalidad = (array, tipo, localidad) =>
  array.filter(
    (equipos) =>
      equipos.tipo.toUpperCase() === tipo.toUpperCase() &&
      equipos.asignado.poblacion.toUpperCase() === localidad.toUpperCase()
  );

/* 11.Una función resumenEquipos que reciba un array de equipos y que devuelva un array de objetos con esta */
const resumenEquipos = (array) =>
  array.reduce(
    (contador, equipo) => [
      ...contador,
      {
        id: equipo.id,
        poblacion: equipo.asignado.poblacion,
        provincia: equipo.asignado.provincia,
      },
    ],
    []
  );
