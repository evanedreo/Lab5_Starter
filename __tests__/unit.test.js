// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email: user_123@mail.org', () => {
  expect(isEmail('user_123@mail.org')).toBe(true);
});

test('invalid email: user@@example.com', () => {
  expect(isEmail('user@@example.com')).toBe(false);
});

test('invalid email: user@mail', () => {
  expect(isEmail('user@mail')).toBe(false);
});

// isStrongPassword
test('valid password: abcd_123456789', () => {
  expect(isStrongPassword('abcd_123456789')).toBe(true);
});

test('valid password: a1234', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});

test('invalid password: 1234', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('invalid password: thispasswordistoolong123', () => {
  expect(isStrongPassword('thispasswordistoolong123')).toBe(false);
});

// isDate
test('valid date: 1/1/2025', () => {
  expect(isDate('1/1/2025')).toBe(true);
});

test('valid date: 12/31/2000', () => {
  expect(isDate('12/31/2000')).toBe(true);
});

test('invalid date: 2025-01-01', () => {
  expect(isDate('2025-01-01')).toBe(false);
});

test('invalid date: Jan 1, 2025', () => {
  expect(isDate('Jan 1, 2025')).toBe(false);
});

// isHexColor
test('valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color: 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(true);
});

test('invalid hex color: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});

test('invalid hex color: ggghhh', () => {
  expect(isHexColor('ggghhh')).toBe(false);
});