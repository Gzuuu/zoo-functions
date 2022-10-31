const data = require('../data/zoo_data');

function countAnimals(animal) {
  let teste = {};
  if (!animal) {
    data.species.forEach((specie) => {
      const { name, residents } = specie;
      teste[name] = residents.length;
    });
    return teste;
  }
  const animals = data.species.find((specie) => specie
    .name === animal.specie);
  if (!animal.sex) {
    teste = animals.residents.length;
  } else {
    teste = animals.residents.filter((resident) => resident
      .sex === animal.sex).length;
  }

  return teste;
}

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
