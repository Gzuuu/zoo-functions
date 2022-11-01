const data = require('../data/zoo_data');

function verifyObject(object, employee) {
  const values = Object.values(object)[0];
  const result = employee
    .firstName === values
|| employee.lastName === values
|| employee.id === values;
  return result;
}

function verifyName(object) {
  return data.employees.find((employee) => verifyObject(object, employee)
  || employee.firstName === object
  || employee.id === object || employee.lastName === object);
}

function fullName(pessoa) {
  const pessoaAtual = verifyName(pessoa);
  return `${pessoaAtual.firstName} ${pessoaAtual.lastName}`;
}

function getSpeciesName(pessoa) {
  const result = [];
  const pessoaAtual = verifyName(pessoa);
  data.species.forEach((specie) => {
    pessoaAtual.responsibleFor.forEach((animals) => {
      if (animals === specie.id) {
        result.push(specie.name);
      }
    });
  });
  return result;
}

function createLocations(pessoa) {
  const result = [];
  const animais = getSpeciesName(pessoa);
  data.species.forEach((specie) => {
    animais.forEach((animal) => {
      if (specie.name === animal) {
        result.push(specie.location);
      }
    });
  });
  return result;
}

function createAllEmployees() {
  return data.employees.map((employee) => {
    const pessoa = {
      id: employee.id,
      fullName: fullName(employee.id),
      species: getSpeciesName(employee.id),
      locations: createLocations(employee.id),
    };
    return pessoa;
  });
}

function getEmployeesCoverage(pessoaNomeOuId) {
  if (!pessoaNomeOuId) {
    return createAllEmployees();
  } if (verifyName(pessoaNomeOuId)) {
    const values = Object.values(pessoaNomeOuId);
    return createAllEmployees().filter((employee) => employee.fullName.includes(values[0])
    || employee.id.includes(values[0]))[0];
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
