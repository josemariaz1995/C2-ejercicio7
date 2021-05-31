/* 1. Una función equiposMayoresEdad que reciba un array de equipos y una edad,
   y que devuelva un array con los equipos asignados a personas mayores de esa edad */
const equiposMayoresEdad = (array, edad) =>
  array
    .filter((equipo) => equipo.asignado.empleado.edad > edad)
    .reduce((contador, equipo) => [...contador, equipo], []);
/* 2. Una función equiposProvincia que reciba un array de equipos y una provincia,
   y que devuelva un array con los equipos asignados a personas de esa provincia. */
const equiposProvincia = (array, provincia) =>
  array
    .filter(
      (equipos) =>
        equipos.asignado.provincia.toUpperCase() === provincia.toUpperCase()
    )
    .reduce((contador, equipo) => [...contador, equipo], []);
/* 3. Una función provincias que reciba un array de equipos
   y devuelva un array de provincias donde haya equipos. */
const provincias = (array) =>
  array
    .map((equipos) => equipos.asignado.provincia)
    .filter((provincias, i, provincia) => provincia.indexOf(provincias) === i);

/* 4.Una función puestos que reciba un array de equipos y devuelva un array de puestos
   de trabajadores con equipo asignado. */

const puestos = (array) =>
  array
    .map((equipos) => equipos.asignado.empleado.puesto)
    .filter((puestos, i, puesto) => puesto.indexOf(puestos) === i);

/* 5.Una función edadMedia que reciba un array de equipos y devuelva la media de edad
   de trabajadores con equipo asignado. */
const edadMedia = (array) => {
  const edadMediaEmpleados = array
    .map((equipos) => equipos.asignado.empleado.edad)
    .reduce(
      (contador, edades, i, array) => edades / array.length + contador,
      0
    );
  return `${edadMediaEmpleados} años de media`;
};

/* 6.Una función equiposPorEdad que reciba un array de equipos y devuelva los equipos
   ordenados por edad del trabajador, de más joven a más viejo. */
const equiposPorEdad = (array) => {
  const equiposOrdenados = [...array];
  equiposOrdenados.sort((a, b) => {
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
  return equiposOrdenados;
};

/* 7.Una función equiposTipo que reciba un array de equipos y un tipo, y que devuelva un
   array con los equipos de ese tipo. */
const equiposTipo = (array, tipo) =>
  array
    .filter((equipo) => equipo.tipo.toUpperCase() === tipo.toUpperCase())
    .reduce((contador, equipo) => [...contador, equipo], []);

/* 8. Una función trabajadoresTipo que reciba un array de equipos y un tipo, y que devuelva un
   array de trabajadores con equipo de ese tipo asignado. */
const trabajadoresTipo = (array, tipo) =>
  array
    .filter((equipo) => equipo.tipo.toUpperCase() === tipo.toUpperCase())
    .map((equipo) => equipo.asignado.empleado);

/*   9.Una función equiposPorTipo que reciba un array de equipos y que devuelva un array de equipos organizados por tipo */
const equiposPorTipo = (array) =>
  /* const equiposEnTipo = array
    .map((equipos) => equipos.tipo)
    .filter((tipo, i) => tipo.indexOf(tipo) !== i)
    .reduce(
      (anteriorTipo, tipo, i) =>
        anteriorTipo.includes(tipo) ? anteriorTipo : [...anteriorTipo, tipo],
      []
    )
    .reduce(
      (contador, tipo) => [
        ...contador,
        { tipo, equipos: array.filter((equipo) => equipo.tipo === tipo) },
      ],
      []
    );
  return equiposEnTipo; */
  array.reduce((acumulador, equipo) => {
    const { tipo } = equipo;
    const subArray = acumulador.find((equipo) => equipo.tipo === tipo);
    if (subArray) {
      subArray.equipos.push(equipo);
      return acumulador;
    } else {
      return [...acumulador, { tipo, equipos: [equipo] }];
    }
  }, []);

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
