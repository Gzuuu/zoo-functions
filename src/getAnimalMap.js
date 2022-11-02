const data = require('../data/zoo_data');

function objectOfRegions() {
  const animals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  return animals;
}

function animalPerRegion() {
  const animals = objectOfRegions();
  data.species.forEach((specie) => {
    switch (specie.location) {
    case 'NE':
      animals.NE.push(specie.name);
      break;
    case 'NW':
      animals.NW.push(specie.name);
      break;
    case 'SE':
      animals.SE.push(specie.name);
      break;
    default:
      animals.SW.push(specie.name);
      break;
    }
  });
  return animals;
}

function includesNames() {
  const animals = objectOfRegions();
  data.species.forEach((specie) => {
    switch (specie.location) {
    case 'NE':
      animals.NE.push({ [specie.name]: specie.residents.map((resident) => resident.name) });
      break;
    case 'NW':
      animals.NW.push({ [specie.name]: specie.residents.map((resident) => resident.name) });
      break;
    case 'SE':
      animals.SE.push({ [specie.name]: specie.residents.map((resident) => resident.name) });
      break;
    default:
      animals.SW.push({ [specie.name]: specie.residents.map((resident) => resident.name) });
      break;
    }
  });
  return animals;
}

function sorteds(forSort) {
  const animals = forSort;
  animals.NE.map((animal) => Object.values(animal)[0].sort());
  animals.NW.map((animal) => Object.values(animal)[0].sort());
  animals.SE.map((animal) => Object.values(animal)[0].sort());
  animals.SW.map((animal) => Object.values(animal)[0].sort());
  return animals;
}

function allResidents() {
  return data.species.map((specie) => specie.residents.map((resident) => resident));
}

function filterSex(array, arrayCompare, sex, location) {
  array[location].map((animal) => {
    const animalsValue = Object.values(animal)[0];
    arrayCompare.forEach((resident) => {
      const myArrayIndex = animalsValue.indexOf(resident.name);
      if (animalsValue.includes(resident.name) && resident.sex !== sex) {
        animalsValue.splice(myArrayIndex, 1);
      }
    });
    return animalsValue;
  });
}

function sexType(type) {
  const residants = allResidents().reduce((acc, cur) => acc.concat(cur), []);
  const animals = includesNames();
  filterSex(animals, residants, type, 'NE');
  filterSex(animals, residants, type, 'NW');
  filterSex(animals, residants, type, 'SE');
  filterSex(animals, residants, type, 'SW');
  return animals;
}

function animalMapping(includeNames, sex) {
  if (includeNames && sex) {
    return sexType(sex);
  } if (includeNames) {
    return includesNames();
  }
}

function getAnimalMap(options = false) {
  if (options.includeNames) {
    const { includeNames, sex, sorted } = options;
    const animalMap = animalMapping(includeNames, sex);
    return sorted ? sorteds(animalMap) : animalMap;
  } return animalPerRegion();
}

module.exports = getAnimalMap;
