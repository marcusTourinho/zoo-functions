const data = require('../data/zoo_data');

const isAnimal = (scheduleTarget) => data.species.some((specie) => specie.name === scheduleTarget);

const isDay = (scheduleTarget) =>
  Object.keys(data.hours).some((element) => element === scheduleTarget);

const getHours = (scheduleTarget) => (data.hours[scheduleTarget].open === 0 ? 'CLOSED'
  : `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`);

const getDayExhibition = (scheduleTarget) => {
  const exhibition = data.species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((specie) => specie.name);
  if (scheduleTarget === 'Monday') {
    return 'The zoo will be closed!';
  }
  return exhibition;
};

const getFullSchedule = () => {
  const schedule = {};
  Object.entries(data.hours).forEach((hour) => {
    schedule[hour[0]] = {
      officeHour: getHours(hour[0]),
      exhibition: getDayExhibition(hour[0]),
    };
  });
  return schedule;
};

const daySchedule = (scheduleTarget) => {
  const schedule = {};
  Object.entries(data.hours).forEach((item) => {
    schedule[scheduleTarget] = {
      officeHour: getHours(scheduleTarget),
      exhibition: getDayExhibition(scheduleTarget),
    };
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  if (isAnimal(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (isDay(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return getFullSchedule();
};

console.log(getSchedule());

module.exports = getSchedule;
