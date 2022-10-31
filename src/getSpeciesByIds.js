const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((element) => {
    data.species.forEach((specie) => {
      if (element === specie.id) {
        result.push(specie);
      }
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
