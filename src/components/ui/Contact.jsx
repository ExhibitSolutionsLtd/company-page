"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ message: "Failed to send message.", type: "error" });
    }

    setTimeout(() => {
      setStatus({ message: "", type: "" });
    }, 5000);
  };

  return (
    <div className="py-16 px-8 max-md:p-5 p-8 mb-5 bg-gray-50" id="contact">
      <div className="flex w-3/5 mx-auto items-center justify-between max-md:flex-wrap max-md:w-full">
        <div className="flex flex-col max-md:justify-center">
          <h2 className="text-3xl text-primary mb-4 font-semibold">
            Get in Touch
          </h2>
          <p>
            For more information, reach out to us via the following channels:
          </p>
          <div className="flex flex-col gap-y-6 mt-4">
            <p className="flex gap-x-2 items-center text-md text-gray-500">
              <MapPin size={18} /> Malik Heights, Ngong Rd, 6th Floor, Room 601
            </p>
            <p className="flex gap-x-2 items-center text-md text-gray-500">
              <Phone size={18} /> +254 20 8100101
            </p>
            <p className="flex gap-x-2 items-center text-md text-gray-500">
              <Mail size={18} />
              <a
                href="mailto:info@exhibitsolutions.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@exhibitsolutions.co.ke
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-primary rounded-lg max-md:w-full max-md:mt-6"
        >
          <div className="flex gap-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="firstName"
                className="text-white font-semibold text-xl"
              >
                First Name
              </Label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="lastName"
                className="text-white font-semibold text-xl"
              >
                Last Name
              </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-3">
            <Label htmlFor="email" className="text-white font-semibold text-xl">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <Label
              htmlFor="subject"
              className="text-white font-semibold text-xl"
            >
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <Label
              htmlFor="message"
              className="text-white font-semibold text-xl"
            >
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex w-full mt-3">
            <Button onClick={handleSubmit} className="bg-secondary w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
      {status.message && (
        <p
          className={`mt-4 text-center transition-opacity duration-500 ${
            status.type === "success"
              ? "text-green-600"
              : status.type === "error"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Contact;
