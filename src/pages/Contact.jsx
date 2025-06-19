export default function Contact() {
  return (
    <section class="min-h-screen pt-24 bg-gray-50 px-4">
      <h2 class="text-2xl font-bold text-purple-800 mb-6 text-center">Contact Us</h2>
      <form class="flex flex-col space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          class="border p-2 rounded outline-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          class="border p-2 rounded outline-purple-400"
        />
        <textarea
          placeholder="Message"
          class="border p-2 rounded outline-purple-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          class="bg-purple-800 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-purple-800 border border-purple-800 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
