const init = () => {
  const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
  global.getData(url).then((data) => {
    // console.log("2.1" + data);
    render(data);
    // console.log("2.2" + global.getData(url));
    // console.log("2.3" + url);
  });
}; 

window.global = { 
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fech.
  getData: (url) => {
    // console.log("2.4" + getData);
    
    
    return fetch(url).then(respuesta => respuesta.json());
    // console.log("2.4" + respuesta.json()); 
    console.log(respuesta.json);  
  }, 
  
  computeStudentsStats: (laboratoria) => {
    // console.log('2.5' + laboratoria);
    // console.log("2.4" + getData);
    const newArray = [];  
    // console.log("2.6" + newArray)
    // console.log(laboratoria);

    for (let key in laboratoria) {
      // console.log("2.7" + key)  
      laboratoria[key].generacion;
      // console.log( laboratoria[key].generacion)
      for (let generaciones in laboratoria[key].generacion) {
        laboratoria[key].generacion[generaciones].estudiantes.forEach(element => {
          const objStudent = {
            name: element.nombre,
            email: element.correo,
            campus: key,
            generation: generaciones,
            stats: {
            }            
          // console.log("3.0" + (objStudent)) 
          };
          // console.log( objStudent) 
          newArray.push(objStudent);
        });
      }
    }

    // console.log(newArray); 
     
    return newArray;
  },

  computeGenerationsStats: (laboratoria) => {
    const generationsArray = []; 
    for (let key in laboratoria) {
      laboratoria[key].generacion;
      for (let generations in laboratoria[key].generacion) {
        countGeneration = laboratoria[key].generacion[generations].estudiantes.length ;
        let generationStudent = laboratoria[key].generacion[generations].estudiantes;
        let sumPercentage = generationStudent.reduce((prev, current) => {
          return prev + current.progreso.porcentajeCompletado;
        }, 0);
        averageGeneration = Math.round(sumPercentage / countGeneration);
        const objGenerations = {
          campus: key,
          generation: generations, 
          count: countGeneration,
          average: averageGeneration
        };
        generationsArray.push(objGenerations);
      
      //   console.log(key);
      //   console.log(generations);
      //   console.log(countGeneration);
      //   console.log(sumPercentage); 
      //   console.log(averageGeneration); 
      //   console.log(generationsArray); 
      }
    }
    // console.log(generationsArray);
    
    return generationsArray;

  },
  sortStudents: (laboratoria) => {},

  filterStudents: (laboratoria) => {},
};
window.onload = init;
