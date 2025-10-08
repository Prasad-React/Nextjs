"use client";

import React, { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    resume: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobileNumber || !formData.email || !formData.resume) {
      setMessage("Please fill all mandatory fields.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("mobileNumber", formData.mobileNumber);
    data.append("email", formData.email);
    data.append("resume", formData.resume);

    try {
      const res = await fetch("/api/users/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Application submitted successfully!");
        setFormData({ name: "", mobileNumber: "", email: "", resume: null });
      } else {
        setMessage(result.error || "❌ Something went wrong.");
      }
    } catch (err) {
      setMessage("❌ Failed to submit application.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Apply for Job</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10 digit mobile number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Mail"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Resume<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg bg-gray-50"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Apply
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm text-center font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
