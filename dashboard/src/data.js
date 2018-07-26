window.computeStudentsStats = (laboratoria) => {
  console.log('1' + laboratoria);
  arregloEstudiantes = [];
  let sedesLaboratoria = Object.keys(laboratoria);
  console.log('2' + sedesLaboratoria);
  for (let i = 0; i < sedesLaboratoria.length; i ++) {
    let campus = sedesLaboratoria [i];
    console.log('3' + sedesLaboratoria [i]);
    let generacionLab = Object.keys(laboratoria[sedesLaboratoria[i]].generacion);
    for (let j = 0; j < generacionLab.length; j ++) {
      let generation = generacionLab [j];
      console.log('4' + generacionLab);
    }
  }
};