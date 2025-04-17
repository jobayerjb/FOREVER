// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">CONTACT US</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Store</h2>
            <div className="space-y-4 text-gray-600">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
              <p>Tel: 415-555-0132</p>
              <p>Email: admin@forever.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Careers at Forever</h2>
            <p className="text-gray-600 mb-6">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View Openings
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Subscribe now & get 20% off
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;