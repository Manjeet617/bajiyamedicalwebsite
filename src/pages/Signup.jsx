import { useState } from 'react';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signup with', form);
    };

    return (
        <div class="p-4 max-w-md mx-auto pt-20">
            <h2 class="text-xl font-bold mb-4">Signup</h2>
            <form onSubmit={handleSignup} class="flex flex-col space-y-4">
                <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} class="border p-2 rounded" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} class="border p-2 rounded" />
                <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} class="border p-2 rounded" />
                <input type="confirm password" placeholder="Confirm Password" value={form.confirmpassword} onChange={(e) => setForm({ ...form, confirmpassword: e.target.value })} class="border p-2 rounded" />

                <button type="submit" class="bg-purple-800 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-purple-800 border border-purple-800 transition">Signup</button>
            </form>
        </div>
    );
}
