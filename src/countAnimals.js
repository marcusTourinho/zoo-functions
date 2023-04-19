const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const { species, sex } = animal;
  const animals = data.species.find((specie) => specie.name === species);

  if (!sex) {
    return animals.residents.length;
  }
  return animals.residents.filter((specie) => specie.sex === sex).length;
};

module.exports = countAnimals;
