const render = (laboratoria) => {
  const computerStudents = global.computeStudentsStats(laboratoria);
  // const generations = global.generations.computeGenerationsStats(laboratoria);
  let plantillaFinal;
  computerStudents.forEach(student => {
    plantillaFinal += structurCard(student.name, student.email, student.campus, student.generation);
  });
  document.getElementById('root').innerHTML = plantillaFinal;
  
};

const structurCard = (nombre, email, campus, generacion) => {
  const plantillaCard = `<div>
                          <h2>${nombre}</h2>
                          <p>${email}</p>
                          <p>${campus}</p>
                          <p>${generacion}</p>
                        </div>`;
  return plantillaCard;
};
// let plantillaGen;
// generations.forEach(generations => )