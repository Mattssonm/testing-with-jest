import {toFahrenheit} from '../temperature.js';

describe('toFahrenheit type test suite', () => {
  //if param is not valid, expect to return NaN
	test('if param is bool', () => {
    //use x !== x to test if NaN === NaN
		expect(toFahrenheit(true) !== toFahrenheit(true)).toBe(true);
	});

  test('if param is undefined', () => {
    expect(toFahrenheit(undefined) !== toFahrenheit(undefined)).toBe(true);
  });

  test('string which can not be converted to number', () => {
    expect(toFahrenheit("nisse") !== toFahrenheit("nisse")).toBe(true);
  });

  test('string which can be converted to number', () => {
    expect(toFahrenheit("25")).toBe(77);
  });
});

describe('toFahrenheit value limits test suite', () => {
	test('if param is Infinity', () => {
		expect(toFahrenheit(Infinity) !== toFahrenheit(Infinity)).toBe(true);
	});

	test('value above MAX_SAFE_INTEGER', () => {
		expect(toFahrenheit(Number.MAX_SAFE_INTEGER + 1) !== toFahrenheit(Number.MAX_SAFE_INTEGER + 1)).toBe(true);
	});

  test('less than lowest allowed value is NaN', () => {
    expect(toFahrenheit(-273.16) !== toFahrenheit(-273.16)).toBe(true)
  });

  test('lowest allowed value', () => {
    expect(toFahrenheit(-273.15)).toBeCloseTo(-459.66999999999996);
  });
});

describe('toFahrenheit normal values test suite', () => {
	test('negative degrees', () => {
		expect(toFahrenheit(-12)).toBeCloseTo(10.399999999999999);
	});

	test('degrees with decimals', () => {
		expect(toFahrenheit(33.3)).toBe(91.94)
	})
});
