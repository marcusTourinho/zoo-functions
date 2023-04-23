const { employees } = require('../data/zoo_data');
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
    if (!employeeData) {
      throw new Error('Informações inválidas');
    }
  return {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: findSpecies(employeeData),
    locations: findLocations(findSpecies(employeeData)),
  }
};

const getAllEmployees = () => {
  const allEmployees = [];
  data.employees.filter((employee) => employee.id).forEach((item) => {
    allEmployees.push({
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: findSpecies(item),
      locations: findLocations(findSpecies(item)),
    })
  });
  return allEmployees;
};

const getEmployeesCoverage = (employee) => {
  if (employee) {
    return findEmployee(employee);
  }
  return getAllEmployees();
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
