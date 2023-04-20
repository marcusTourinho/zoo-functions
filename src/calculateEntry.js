const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');
const { prices } = data;

const countEntrants = (entrants) => (
  {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  }
);

const calculateEntry = (entrants) => {
  if(!entrants || entrants === 0) return 0;
  const totalValue = countEntrants(entrants).adult * prices.adult
    + countEntrants(entrants).child * prices.child
    + countEntrants(entrants).senior * prices.senior;
  return parseFloat(totalValue.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
