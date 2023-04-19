const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species.find((specie) => specie.name === animal)
    .residents.every((specie) => specie.age >= age);

module.exports = getAnimalsOlderThan;
