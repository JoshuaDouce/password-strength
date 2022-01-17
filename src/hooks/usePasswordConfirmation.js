import { useEffect, useState } from 'react';
import { isValid } from '../utils/PasswordUtils';

function usePasswordConfirmation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(password === confirmPassword);
  const [passwordInvalid, setPasswordInvalid] = useState(!isValid(password) && password !== '');

  useEffect(() => {
    const evaluateInputTimeout = setTimeout(() => {
      setPasswordInvalid(!isValid(password) && password !== '');
      setPasswordsMatch(password === confirmPassword);
    }, 500);
    return () => clearTimeout(evaluateInputTimeout);
  }, [password, confirmPassword]);

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordsMatch,
    passwordInvalid
  };
}

export default usePasswordConfirmation;
