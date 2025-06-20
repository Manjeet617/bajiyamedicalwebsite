import React from "react";
import Layout from "../Components/Layout"; // adjust path if needed

export default function About() {
  return (
    
      <section className="p-4 pt-20 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">About Us</h2>
        <p className="text-gray-700 leading-relaxed space-y-4">
          <span>
            <strong>Bajiya Medical</strong> is your trusted source for genuine medicines and healthcare essentials.
          </span>
          <br />
          <span>
            Our mission is to make healthcare accessible and hassle-free for everyone.
          </span>
          <br />
          <span>
            With a dedicated customer support team, fast delivery service, and a user-friendly shopping experience...
          </span>
          <br />
          <span>
            This platform is proudly founded and managed by <strong>Mr.Manjeet Bajiya</strong>.
          </span>
          <br />
          <span>Thank you for choosing Bajiya Medical — your health, our priority.</span>
        </p>
      </section>
    
  );
}
