const render = (laboratoria) => {
  // console.log("1.0" + laboratoria)
  // console.log(render)

  const computerStudents = global.computeStudentsStats(laboratoria);
  // console.log("1.2" + computerStudents);
  const computerGenerations = global.computeGenerationsStats(laboratoria);
  // console.log("1.3" + computerGenerations);
 
  // funcionalidad de los botones
  const selectDivs = document.getElementsByClassName('select');
  const arraySelect = Array.from(selectDivs);
  arraySelect.forEach((select) => {
    select.addEventListener('click', (event) => {
      let generation = event.target.dataset.gen;
      let campus = event.target.dataset.campus;
      // console.log(campus);
      // console.log(generation);
      let espacioEstudiantes = document.getElementById('estudiantes');
      
      const studentsByGen = filterStudents(computerGenerations, computerStudents, generation, campus);
    // drawStudents(studentsByGen);
    });
  });


  let plantillaStudent;
  computerStudents.forEach(student => {
    // console.log("1.3" +  student );
    plantillaStudent += structurCard(student.name, student.email, student.campus, student.generation);
    // console.log("1.4" + student.name  )
    // console.log("1.5" + student.email  )
    // console.log("1.6" + student.campus  )
    // console.log("1.7" + plantillaFinal  )
  });

  let plantillaGenerations;
  computerGenerations.forEach(generStud => {
    plantillaGenerations += structurCard1(generStud.campus, generStud.generation, generStud.average, generStud.count);
  });
  // document.getElementById('root-2').innerHTML = plantillaGenerations;
};

const structurCard = (nombre, email, campus, generacion) => {
  const plantillaCard = `<div>
                          <h4>${nombre}</h4>
                          <p>${email}</p>
                          <p>${campus}</p>
                          <p>${generacion}</p>
                        </div>`;
  // return plantillaCard;
};

const structurCard1 = (campus, generation, average, count) => {
  const plantillaCard1 = `<div>
                            <h2>${campus}</h2>
                            <p>${generation}</p>
                            <p>${average}</p>
                            <p>${count}</p>
                          </div>`;
  // return plantillaCard1;
};
// console.log("1.8" + structurCard )
// let plantillaGen;
// generations.forEach(generations => ){}}

const filterStudents = (objGenration, objStudent, generation, campus) => {
  const genByCampus = objGenration.filter((item) => {
    return item.campus === campus;
  });

  const studentByCampus = objStudent.filter((student) => {
    return student.campus === campus;
  });

  const studentsByGen = studentByCampus.filter((item) => {
    return item.generation === generation;
  });

  // console.log(genByCampus);
  // console.log(studentByCampus);
  // console.log(studentsByGen);
  let result = '';
  let msj = '';
  for (let j = 1 ; j < studentsByGen.length; j++) {
    msj = msj + `
    <th scope="col">${studentsByGen[j].name}</th>
    <th scope="col">${studentsByGen[j].email}</th>
    <th scope="col">${studentsByGen[j].campus}</th>
    <th scope="col">${studentsByGen[j].generation}</th> 
    </tr>`;
  }
  
  document.getElementById('estudiantes').innerHTML = msj;
  // console.log(result);
  document.getElementById('tabla').style.display = 'initial';

  // let result2 = '';
  let msj2 = '';
  // console.log(genByCampus[0].campus);

  for (let k = 0; k < genByCampus.length; k++) {
    msj2 = msj2 + `
    <div id="card">
    <h2>${genByCampus[k].campus}</h2>
    <p>${genByCampus[k].generation}</p>
    <p>${genByCampus[k].average}</p>
    <p>${genByCampus[k].count}</p>
  </div>`;
  }
  // console.log(msj2)
  document.getElementById('resultados').innerHTML = msj2;

  return studentsByGen;
};