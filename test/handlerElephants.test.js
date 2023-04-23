const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants("count") retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se handlerElephants("names") retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se handlerElephants("averageAge") retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 5);
  });
  it('Testa se handlerElephants("location") retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se handlerElephants("popularity") retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Testa se handlerElephants("availability") retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Testa se handlerElephants() retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se handlerElephants({}) retorna uma string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se handlerElephants({}) retorna uma string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants('Zzk')).toBeNull();
  });
});
