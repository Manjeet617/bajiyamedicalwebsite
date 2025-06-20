import React from "react";
import Layout from "../Components/Layout"; // adjust if needed

export default function Contact() {
  return (
    
      <section className="pt-24 pb-16 bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Contact Us</h2>
        <form className="flex flex-col space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded outline-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded outline-purple-400"
          />
          <textarea
            placeholder="Message"
            className="border p-2 rounded outline-purple-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-800 text-white px-4 py-2 rounded-2xl hover:bg-white hover:text-purple-800 border border-purple-800 transition"
          >
            Send
          </button>
        </form>
      </section>
    
  );
}
