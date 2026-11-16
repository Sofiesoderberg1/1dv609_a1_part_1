import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'; 
import { jest } from '@jest/globals';



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    const mockHelper = {
    isCorrectLength: jest.fn().mockReturnValue(true),
    isCorrectFormat: jest.fn().mockReturnValue(true),
    isValidMonth: jest.fn().mockReturnValue(true),
    isValidDay: jest.fn().mockReturnValue(true),
    luhnisCorrect: jest.fn().mockReturnValue(true)
};
 beforeEach(() => {
        mockHelper.isCorrectLength.mockReturnValue(true);
        mockHelper.isCorrectFormat.mockReturnValue(true);
        mockHelper.isValidMonth.mockReturnValue(true);
        mockHelper.isValidDay.mockReturnValue(true);
        mockHelper.luhnisCorrect.mockReturnValue(true);

        jest.clearAllMocks();
    });

    test('should return the correct year', () => {
    const ssn = new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(ssn.getYear()).toBe('90');
});

test('should return the correct month', () => {
    const ssn = new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(ssn.getMonth()).toBe('01');
});

test('should return the correct day', () => {
    const ssn = new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(ssn.getDay()).toBe('01');
});

test('should return the correct serial number', () => {
    const ssn = new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(ssn.getSerialNumber()).toBe('1234');
});

test('should throw error when SSN is too short', () => {
    mockHelper.isCorrectLength.mockReturnValue(false);

    expect(() => {
        new SwedishSocialSecurityNumber('900101-1234', mockHelper);
    }).toThrow('To short, must be 11 characters');
});

test('should throw error when SSN has incorrect format', () => {
    mockHelper.isCorrectFormat.mockReturnValue(false);

    expect(() => {
        new SwedishSocialSecurityNumber('900101-1234', mockHelper);
    }).toThrow('Incorrect format, must be: YYMMDD-XXXX');
});

test('should throw error when SSN has invalid month', () => {
    mockHelper.isValidMonth.mockReturnValue(false);

    expect(() => {
        new SwedishSocialSecurityNumber('900101-1234', mockHelper);
    }).toThrow('Invalid month in SSN');
});

test('should throw error when SSN has invalid day', () => {
    mockHelper.isValidDay.mockReturnValue(false);

    expect(() => {
        new SwedishSocialSecurityNumber('900101-1234', mockHelper);
    }).toThrow('Invalid day in SSN');
});

test('should throw error when Luhn validation fails', () => {
    mockHelper.luhnisCorrect.mockReturnValue(false);

    expect(() => {
        new SwedishSocialSecurityNumber('900101-1234', mockHelper);
    }).toThrow("Invalid SSN according to Luhn's algorithm");
});

test('should call isCorrectLength', () => {
    new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(mockHelper.isCorrectLength).toHaveBeenCalled();
});
test('should call isCorrectLength exactly once', ()=>{
    new SwedishSocialSecurityNumber('900101-1234', mockHelper);

    expect(mockHelper.isCorrectLength).toHaveBeenCalledTimes(1);
});
});