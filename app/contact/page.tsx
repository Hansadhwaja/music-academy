'use client'
import React, { useState, FormEvent } from 'react';
import { Meteors } from '@/components/ui/meteors';

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      <Meteors number={40} />
      <form
        className="relative bg-black/[.96] p-2 sm:p-6 rounded-lg shadow-lg w-full m-2 sm:w-1/2 z-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
