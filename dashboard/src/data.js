window.computeStudentsStats = (laboratoria) => {
  // console.log('1' + laboratoria);
  arregloEstudiantes = [];
  let arrayEvento = event.target.id.split('-');
  let result = ' ';
  console.log(arrayEvento);


  let sedesLaboratoria = Object.keys(laboratoria);
  // console.log('2' + sedesLaboratoria);
  for (let i = 0; i < sedesLaboratoria.length; i ++) {
    let campusLabo = sedesLaboratoria [i];
    // console.log('3' + sedesLaboratoria [i]);
    let generacionLab = Object.keys(laboratoria[sedesLaboratoria[i]].generacion);
    for (let j = 0; j < generacionLab.length; j ++) {
      let generations = generacionLab [j];
      // console.log('4' + generacionLab);
      let estudiantesLabo = laboratoria[sedesLaboratoria[i]].generacion[generacionLab[j]].estudiantes;
      // console.log('5' + estudiantesLabo);
      for (estudiantes of estudiantesLabo) {
        // console.log(estudiantes.nombre);
      }
      result = result + `
            <th scope="col"> ${estudiantes.nombre}</th>
            <th scope="col"> ${estudiantes.correo}</th>
            <th scope="col"> ${estudiantes.turno}</th>
            <th scope="col"> ${estudiantes.porcentajeCompletado}%</th>
            </tr>
                `;
      document.getElementById('pintar').innerHTML = result;
      document.getElementById('tabla').style.display = 'initial';
       console.log(result);
      


      // let estudianteSede = estudiantesLabo.map(function(object) {
      // return objtEstudiantes = {
      // name: 'nombre.value',
      // email: 'email.value',
      // campus: campusLabo,
      // generation: generacionLab
      // };
      // }
      
      // );
      // console.log(estudianteSede);
    };
  }
};
