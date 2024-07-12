'use client';

import { signInWithPassword, signUpWithPassword } from '@/src/lib/auth/actions';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: 'mathieu08800@hotmail.fr', password: '1234abcdEFGH*' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent, action: Function) => {
    e.preventDefault();
    const form = new FormData();
    form.append('email', formData.email);
    form.append('password', formData.password);

    const result = await action(form);

    if (result?.error) {
      setError(result.error);
    } else {
      // Gérer la redirection ou l'état après le succès
      // Par exemple, rediriger l'utilisateur ou afficher un message de succès
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, signInWithPassword)}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Log in</button>
      <button type="button" onClick={(e) => handleSubmit(e, signUpWithPassword)}>Sign up</button>
      {error && <div className="error-toast">{error}</div>}
    </form>
  );
}