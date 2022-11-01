const data = require('../data/zoo_data');

function getOficeHour(day) {
  const hour = `Open from ${data.hours[day].open}am until ${
    data.hours[day].close
  }pm`;
  return hour;
}

function createWeekDay(day) {
  const weekday = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  return weekday;
}

const getSpecieAvailability = (weekDay) => {
  const animalOfDay = [];
  data.species.forEach((specie) => {
    if (specie.availability.includes(weekDay)) {
      animalOfDay.push(specie.name);
    }
  });
  return animalOfDay;
};

function allShedules() {
  const shedule = {};
  createWeekDay().forEach((weekday) => {
    shedule[weekday] = { officeHour: getOficeHour(weekday),
      exhibition: getSpecieAvailability(weekday) };
  });
  shedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return shedule;
}

function someoneEqual(animal) {
  return data.species.some((specie) => specie.name === animal);
}

function getSchedule(scheduleTarget) {
  if (someoneEqual(scheduleTarget)) {
    let result;
    data.species.forEach((specie) => {
      if (specie.name === scheduleTarget) {
        result = specie.availability;
      }
    });
    return result;
  } if (createWeekDay().includes(scheduleTarget)) {
    const obj = { [scheduleTarget]: allShedules()[scheduleTarget] };
    return obj;
  }
  return allShedules();
}

module.exports = getSchedule;
