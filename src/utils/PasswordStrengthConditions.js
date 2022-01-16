import {
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacter,
  hasNumber,
  isLongEnough
} from '../utils/PasswordUtils';

export const strengthConditions = [
  { condition: hasUpperCase, label: 'Upper case character' },
  { condition: hasLowerCase, label: 'Lower case character' },
  { condition: hasSpecialCharacter, label: 'Special character' },
  { condition: hasNumber, label: 'Numeric character' },
  { condition: isLongEnough, label: 'Longer than 7 characters' }
];
