const data = require('../data/zoo_data');

const getAllAnimals = () => data.species.reduce((acc, { location, name }) => ({
  ...acc,
  [location]: [...(acc[location] || []), name],
}), {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getAllAnimals();
  }

};

console.log(getAnimalMap())

module.exports = getAnimalMap;
