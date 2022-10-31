const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let result;
  data.species.forEach((specie) => {
    if (specie.name === animal) {
      result = specie.residents.every((element) => element.age >= age);
    }
  });
  return result;
}

module.exports = getAnimalsOlderThan;
