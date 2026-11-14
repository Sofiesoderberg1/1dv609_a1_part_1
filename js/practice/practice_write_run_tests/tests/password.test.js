
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'

import { Password } from '../src/Correct'

// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const emptyPassword = '';

    test('should throw error when password is too short', () => {
    expect(() => {
        new Password('abc123');
    }).toThrow('Too short password');
});

   test('should throw error when password has no number', () => {
    expect(() => {
        new Password('abcdefghijkl');
    }).toThrow('No number found');
});

test('should accept password with 12 characters and a number', () => {
    expect(() => {
        new Password('abcdefghijkl1');
    }).not.toThrow();
});
    test('should create a hash for a valid password', () => {
        const password = new Password('abcdefghijkl1');

        expect(typeof password.getPasswordHash()).toBe('number');
    });

    test('should throw error when password is too short after trimming', () => {
    expect(() => {
        new Password('  abc1234567')
    }).toThrow('Too short password');
});

test('should return false when passwords are different', () => {
    const password1 = new Password('abcdefghijkl1');
    const password2 = new Password('abcdefghijk2');

    expect(password1.isPasswordSame(password2)).toBe(false);
});
    test('should throw error when argument is not a password object', () => {
    const password1 = new Password('abcdefghijkl1');

    expect(() => {
        password1.isPasswordSame("hello");
    }).toThrow('Invalid argument');
});
});