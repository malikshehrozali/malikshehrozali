"use client";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      name,
      email,
      message,
    };
    try {
      const response = await axios.post("/api/contact", form);
      if (response.data.success) {
        toast("I will Contact You Soon!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/3 w-full flex flex-col gap-5 justify-center"
    >
      <div className="relative mb-6">
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-2 px-1 focus:outline-none focus:border-primary-orange"
        />
        <label
          htmlFor="name"
          className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-primary-orange peer-focus:text-sm"
        >
          Your Name
        </label>
      </div>

      <div className="relative mb-6">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-2 px-1 focus:outline-none focus:border-primary-orange"
        />
        <label
          htmlFor="email"
          className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-primary-orange peer-focus:text-sm"
        >
          Email Address
        </label>
      </div>

      <div className="relative mb-8">
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-2 px-1 focus:outline-none focus:border-primary-orange resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-primary-orange peer-focus:text-sm"
        >
          Your Message
        </label>
      </div>
      <div>
        <button className="relative cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary-orange rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            {sent ? "✅ Sent!" : "Send Message"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
