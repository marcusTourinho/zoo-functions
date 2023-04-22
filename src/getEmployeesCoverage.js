const data = require('../data/zoo_data');

const findSpecies = (employeeData) => {
  const animalsId = employeeData.responsibleFor;
  const animalName = [];
  animalsId.forEach((animal) => {
      animalName.push(data.species.find((specie) => specie.id === animal).name);
  });
  return animalName
}

const findLocations = (animalNames) => {
  const locations = [];
  animalNames.forEach((animal) => {
    locations.push(data.species.find((specie) => specie.name === animal).location);
  })
  return locations;
}

const findEmployee = (employee) => {
  const info = Object.entries(employee)[0][1];
  const employeeData = data.employees
    .find((person) => person.id === info || person.firstName === info || person.lastName === info);
  return {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: findSpecies(employeeData),
    locations: findLocations(findSpecies(employeeData)),
  }
};

const getEmployeesCoverage = (employee) => {
  if (employee) {
    return findEmployee(employee);
  }
  
};

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
