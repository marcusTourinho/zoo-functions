const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const { name, sex, age } = data.species.find((specie) => specie.id === firstAnimal).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
