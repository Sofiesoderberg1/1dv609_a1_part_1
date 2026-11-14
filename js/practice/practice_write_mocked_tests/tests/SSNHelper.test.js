import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelpe Tests', () => {

    test('should return true when SSN has 11 characters', () => {
    const helper = new SSNHelper();

    expect(helper.isCorrectLength('900101-1234')).toBe(true);
});
    
});