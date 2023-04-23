const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpeningHours("Tuesday", "09:00-AM") é uma função e retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toBeDefined();
    expect(getOpeningHours('Tuesday', '9:00-AM')).toBe('The zoo is open');
  });
  it('Testa se getOpeningHours("Monday", "09:00-AM") retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se getOpeningHours() retorna um objeto, e se esse objeto possui todos os horários', () => {
    expect(getOpeningHours()).toBeInstanceOf(Object);
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se getOpeningHours("Thu", "09:00-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se getOpeningHours("Friday", "09:00-ZM") retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se getOpeningHours("Saturday", "C9:00-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa se getOpeningHours("Sunday", "09:c0-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa se getOpeningHours("Sunday", "09:c0-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa se getOpeningHours("Monday", "13:00-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se getOpeningHours("Tuesday", "09:60-AM") retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
