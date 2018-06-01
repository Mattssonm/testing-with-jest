import {toFahrenheit} from '../temperature.js';

describe('toFahrenheit test suite', () => {
  //if param is not valid, expect to return NaN
	test('if param is bool, returns NaN', () => {
    //use isNaN to test if NaN === NaN
		expect(Number.isNaN(toFahrenheit(true))).toBe(Number.isNaN(NaN));
	});

  test('if param is undefined, returns NaN', () => {
    expect(Number.isNaN(toFahrenheit(undefined))).toBe(Number.isNaN(NaN));
  });

  test('if param is Infinity, returns NaN', () => {
    expect(Number.isNaN(toFahrenheit(Infinity))).toBe(Number.isNaN(NaN));
  });

  test('string which can not be converted to number', () => {
    expect(Number.isNaN(toFahrenheit("nisse"))).toBe(Number.isNaN(NaN));
  });

  test('string which can be converted to number', () => {
    expect(toFahrenheit("25")).toBe(77);
  });

  test('negative degrees, and floats', () => {
    expect(toFahrenheit(-12.5).toBe(9.5));
  });

  test('less than lowest allowed value is NaN', () => {
    expect(Number.isNaN(toFahrenheit(-273.16))).toBe(Number.isNaN(NaN))
  });

  test('lowest allowed value', () => {
    expect(toFahrenheit(-273.15)).toBeCloseTo(-459.66999999999996);
  });
});
