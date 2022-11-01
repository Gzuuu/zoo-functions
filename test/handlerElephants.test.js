const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se passado o argumento count retorna o valor correto', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toBe(expected);
  });

  it('Testa se passado o argumento names retorna um array  de nomes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toEqual(expected);
  });

  it('Testa se passado o argumento avarageAge, retorna o valor correto', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(expected);
  });

  it('Testa se passado um argumento diferente de string retorna um erro', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants({});
    expect(actual).toBe(expected);
  });

  it('Testa se não passado um argumento retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Testa se passado uma string aleatória retorna null', () => {
    const actual = handlerElephants('random');
    expect(actual).toBeNull();
  });

  it('Testa se passado o argumento location, retorna o valor correto', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toBe(expected);
  });
});
