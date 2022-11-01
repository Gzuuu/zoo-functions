const data = require('../data/zoo_data');

function countEntrants(entrantsCount) {
  const result = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrantsCount.forEach((entrant) => {
    if (entrant.age < 18) {
      result.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      result.adult += 1;
    } else result.senior += 1;
  });

  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const visitors = countEntrants(entrants);
  const result = visitors.adult * 49.99
    + visitors.child * 20.99
    + visitors.senior * 24.99;
  return result;
}

module.exports = { calculateEntry, countEntrants };
