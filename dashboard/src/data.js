const init = () => {
  const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
  global.getData(url).then((data) => {
    // console.log(data);
    render(data);
  });
} 

window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fech.
  getData: (url) => {
    return fetch(url).then(respuesta => respuesta.json());
  },
  computeStudentsStats: (laboratoria) => {
    const newArray = [];
    for (let key in laboratoria) {
      laboratoria[key].generacion;
      for (let generaciones in laboratoria[key].generacion) {
        laboratoria[key].generacion[generaciones].estudiantes.forEach(element => {
          const objStudent = {
            name: element.nombre,
            email: element.correo,
            campus: key,
            generation: generaciones,
            stats: {

            }

          };
          newArray.push(objStudent);
        });
      }
    }    
    return newArray;
  },
  computeGenerationsStats: () => {},
  sortStudents: () => {},
  filterStudents: () => {}
};
window.onload = init;
