// Se crea el objeto global.
window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fech.
  getData: (laboratoria) => {
    const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        // Se guarda el valor de la data en una función.
        estudiante(data);
        // console.log(data);
      });
  }
};

// Se genera el objeto global del Json.
window.global.getData();

// Se llama al id de los botones de las sedes.
let btnSedes = document.getElementsByClassName('dropdown-menu');
// console.log(btnSedes[0]);
const estudiante = (data) => {
  // console.log(data)

// Función que contiene la data.
  for (let i = 0; i < btnSedes.length; i++) {
    btnSedes[i].addEventListener('click', event => {
      computeStudentsStats(data);
    });
  }
};


window.computeGenerationsStats = (laboratoria) =>{
  const generations = {
    generation: null,
    campus: null,
    count: null,
    average: null
  };
  for (key in laboratoria) {
    generations.campus = key;
    console.log(generations);
  }
};