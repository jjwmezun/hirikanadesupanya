const isVowel = require( `./index` );

test( `a is a vowel`, () => {
  expect(isVowel(`a`)).toBeTruthy();
});
test( `A is a vowel`, () => {
  expect(isVowel(`A`)).toBeTruthy();
});
test( `b is not a vowel`, () => {
  expect(isVowel(`b`)).toBeFalsy();
});