const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === pessoa.responsibleFor[0]);
  const maisVelho = animal.residents.reduce((acc, cur) => ((cur.age > acc.age) ? cur : acc));
  const { age, sex, name } = maisVelho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
