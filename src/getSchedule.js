const data = require('../data/zoo_data');

const isAnimal = (scheduleTarget) => data.species.some((specie) => specie.name === scheduleTarget);

const getSchedule = (scheduleTarget) => {
  if (isAnimal(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  };
  const schedule = {};
    Object.entries(data.hours).forEach((hour) => {
      if (hour[0] === 'Monday') {
        schedule[hour[0]] = 
        {
          officeHour: 'CLOSED', 
          exhibition: 'The zoo will be closed!',
        }
      }
      schedule[hour[0]] = { 
        officeHour: `Open from ${hour[1].open}am until ${hour[1].close}pm`,
        exhibition: data.species.reduce((acc, curr) => {
          if (curr.availability.includes(hour[0])) {
            acc.push(curr.name);
            return acc;
          }
          return acc;
        }, []),
      }
    });
    return schedule;
};

console.log(getSchedule('Friday'));

module.exports = getSchedule;
