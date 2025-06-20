import { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmpassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup with', form);
  };

  return (
    <div className="p-4 max-w-md mx-auto pt-20">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirmpassword}
          onChange={(e) => setForm({ ...form, confirmpassword: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-purple-800 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-purple-800 border border-purple-800 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
