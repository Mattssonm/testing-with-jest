import {canGetLicense} from '../license.js';

describe('canGetLicense limit values test suite', () => {
	test('highest allowed value of age', () => {
		expect(() => {
      canGetLicense("A", 121);
    }).toThrow();
	});

  test('lowest allowed value of age', () => {
		expect(() => {
      canGetLicense("A", -1);
    }).toThrow();
	});
});

describe('canGetLicense illegal values test suite', () => {
  test('wrong order of params', () => {
		expect(() => {
      canGetLicense(18, "A");
    }).toThrow();
	});

  test('bad param types', () => {
		expect(() => {
      canGetLicense(true, [1,2,3]);
    }).toThrow();
	});

  test('bad string', () => {
		expect(() => {
      canGetLicense("E", 32);
    }).toThrow();
	});

  test('empty string', () => {
		expect(() => {
      canGetLicense("", 32);
    }).toThrow();
	});

  describe('canGetLicense normal values', () => {
  	test('valid value to be true', () => {
  		expect(canGetLicense("BE", 32)).toBe(true);
  	});

    test('valid value to be false', () => {
  		expect(canGetLicense("D", 21)).toBe(false);
  	});
  });
});
