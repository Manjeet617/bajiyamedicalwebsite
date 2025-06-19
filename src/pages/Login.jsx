import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with', email, password);
  };

  return (
    <div class="p-4 max-w-md mx-auto pt-20">
      <h2 class="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} class="flex flex-col space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} class="border p-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} class="border p-2 rounded" />
        <button type="submit" class="bg-purple-800 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-purple-800 border border-purple-800 transition">Login</button>
      </form>
    </div>
  );
}
