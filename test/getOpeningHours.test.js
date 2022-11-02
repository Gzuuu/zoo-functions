const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se não passado parametro retorna o objeto correto', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Testa se passado os argumentos Monday e 09:00-AM retorna o valor correto', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Testa se passado os argumentos Tuesday e 09:00-AM retorna o valor correto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('Testa se passado os argumentos Thu e 09:00-AM é criada uma exceção com a mensagem correta', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrowError('The day must be valid. Example: Monday');
  });

  it('Testa se passado os argumentos Friday e 09:00-ZM é criada uma exceção com a mensagem correta', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se passado os argumentos Saturday e C9:00-AM é criado uma exceção com a mensagem correta', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrowError('The hour should represent a number');
  });

  it('Testa se passado os argumentos Sunday e 09:c0-AM é criado uma exceção com a mensagem  correta', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrowError('The minutes should represent a number');
  });

  it('Testa se passado os argumentos Monday e 13:00-AM é criado uma exceção com a mensagem  correta', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrowError('The hour must be between 0 and 12');
  });

  it('Testa se passado os argumentos Tuesday e 09:60-AM é criado uma exceção com a mensagem  correta', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrowError('The minutes must be between 0 and 59');
  });
});
