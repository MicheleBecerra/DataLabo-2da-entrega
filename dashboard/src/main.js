const render = (laboratoria) => {
  // console.log("1.0" + laboratoria)
  // console.log(render)

  const computerStudents = global.computeStudentsStats(laboratoria);
  // console.log("1.2" + computerStudents);
  const computerGenerations = global.computeGenerationsStats(laboratoria);
  // console.log("1.3" + computerGenerations);
  let plantillaStudent;
  computerStudents.forEach(student => {
    // console.log("1.3" +  student );
    plantillaStudent += structurCard(student.name, student.email, student.campus, student.generation);
    // console.log("1.4" + student.name  )
    // console.log("1.5" + student.email  )
    // console.log("1.6" + student.campus  )
    // console.log("1.7" + plantillaFinal  )
  });
  document.getElementById('root-1').innerHTML = plantillaStudent;
 
  let plantillaGenerations;
  computerGenerations.forEach(generStud => {
    plantillaGenerations += structurCard1(generStud.campus, generStud.generation, generStud.average, generStud.count);
  });
  document.getElementById('root-2').innerHTML = plantillaGenerations;
};
const structurCard = (nombre, email, campus, generacion) => {
  const plantillaCard = `<div>
                          <h4>${nombre}</h4>
                          <p>${email}</p>
                          <p>${campus}</p>
                          <p>${generacion}</p>
                        </div>`;
  return plantillaCard;
};
const structurCard1 = (campus, generation, average, count) => {
  const plantillaCard1 = `<div>
                            <h2>${campus}</h2>
                            <p>${generation}</p>
                            <p>${average}</p>
                            <p>${count}</p>
                          </div>`;
  return plantillaCard1;
};
// console.log("1.8" + structurCard )
// let plantillaGen;
// generations.forEach(generations => ){}}