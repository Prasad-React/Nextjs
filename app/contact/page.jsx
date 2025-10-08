"use client";

import React from "react";
import menuData from "@/data/menu.json";

function Contactus() {
  // Destructure ContactUs data
  const contactSection = menuData.ContactUs?.[0];
  const contact = contactSection?.content?.[0];

  if (!contactSection || !contact) {
    return <div className="p-4 text-red-600">Contact data not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{contactSection.title}</h1>

      {/* Google Map Embed */}
      <div className="w-full h-96 mb-6 rounded-lg overflow-hidden shadow">
        <iframe
          src={contact.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Address & Contact Info */}
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          <strong>Address:</strong> {contact.address}
        </p>
        <p>
          <strong>Phone:</strong> {contact.contact}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
      </div>
    </div>
  );
}

export default Contactus;
