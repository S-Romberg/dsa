import isAnagram from './anagram'

// An anagram is a string that contains the same characters in any order
describe('Anagram', () => {
  test('should return true for an anagram', () => {
     expect(isAnagram('cats', 'tacs')).toBe(true)
  })
  test('should return false if its not an anagram', () => {
     expect(isAnagram('tacos', 'cats')).toBe(false)
  })
})