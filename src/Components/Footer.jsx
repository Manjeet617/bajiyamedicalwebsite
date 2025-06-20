import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Why Choose Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="text-sm space-y-2 leading-relaxed">
            <li>✅ 100% Genuine Medicines</li>
            <li>✅ Free Home Delivery (on orders ₹499+)</li>
            <li>✅ Trusted by 500+ Families</li>
            <li>✅ 24/7 WhatsApp Support</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="text-sm space-y-2">
            <li>Online Pharmacy</li>
            <li>Doctor Consultation</li>
            <li>Lab Test Booking</li>
            <li>Healthcare Products</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm">Manjeet Bajiya</p>
          <p className="text-sm">📞 +91-6367126529</p>
          <p className="text-sm">📧 support@medicinehub.com</p>
          <p className="text-sm mt-2">Sikar, Rajasthan (India)</p>
        </div>

        {/* Support & Reviews */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <a
            href="https://wa.me/916367126529"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition"
          >
            💬 Chat on WhatsApp
          </a>

          <div className="mt-4">
            <a
              href="https://www.google.com/search?q=bajiya+medical+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              ⭐ Read our Google Reviews
            </a>
          </div>

          {/* Trust Badge Placeholder */}
          <div className="mt-4">
            <img
              src="/images/trust-badge.png"
              alt="Trust Badge"
              className="h-10 w-auto"
            />
            <p className="text-xs mt-1 text-gray-400">ISO Certified | Secure Payments</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BajiyaMedicineHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
