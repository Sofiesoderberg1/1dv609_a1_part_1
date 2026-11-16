import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelpe Tests', () => {

    test('should return true when SSN has 11 characters', () => {
    const helper = new SSNHelper();

    expect(helper.isCorrectLength('900101-1234')).toBe(true);
});
test('should return false when SSN has incorrect length', () => {
const helper = new SSNHelper();
expect(helper.isCorrectLength('12345')).toBe(false);
});

test('should return true when social security number has correct format', ()=> {
    const helper = new SSNHelper(); 
    expect(helper.isCorrectFormat('900101-1234')).toBe(true)
})

test('should return false when social security number does not have hyphen', () => {
    const helper = new SSNHelper();

    expect(helper.isCorrectFormat('9001011234')).toBe(false);
});

test('should return false when social security number does not have hyphen', () => {
    const helper = new SSNHelper();

    expect(helper.isCorrectFormat('9001011234')).toBe(false);
});
   test('should return true when a valid month is accepted', ()=> {
    const helper = new SSNHelper(); 
    
    expect(helper.isValidMonth('05')).toBe(true);
});

test('should return false when month is invalid', () => {
    const helper = new SSNHelper();

    expect(helper.isValidMonth('13')).toBe(false);
});

test('should return true when day is valid', () => {
  const helper = new SSNHelper();

  expect(helper.isValidDay('15')).toBe(true);
});

test('should return false when day is invalid', () => {
    const helper = new SSNHelper();

    expect(helper.isValidDay('32')).toBe(false);
});
});