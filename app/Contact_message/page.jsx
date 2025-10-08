// pages/contact.js
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    initial: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    message: "",
    category: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/users/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Submitted successfully!");
        setFormData({
          initial: "",
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          companyName: "",
          message: "",
          category: "",
        });
      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-10 bg-yellow-100">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4 bg-yellow-100">
        <h2 className="text-2xl font-bold">Contact us</h2>
        <p>Please fill out the form below and we will get back to you as soon as possible.</p>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Careers">Careers</option>
          <option value="Support">Support</option>
          <option value="Business">Business</option>
        </select>

        <div className="flex gap-2">
          <select
            name="initial"
            value={formData.initial}
            onChange={handleChange}
            className="w-1/4 p-2 border rounded"
          >
            <option value="">Initial</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>

          <input
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-2">
          <input
            name="mobileNumber"
            placeholder="Mobile Number*"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="email"
            placeholder="Email ID*"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        />

        <div className="text-sm text-black font-semibold">* - Fields are mandatory</div>

        <button
          type="submit"
          className="bg-[#682d2d] text-white px-4 py-2 rounded hover:bg-[#4a1e1e]"
        >
          Submit
        </button>

        {status && <div className="mt-2 text-sm font-medium">{status}</div>}
      </form>
    </div>
  );
}
