// src/components/MainForm.jsx
import React, { useState } from "react";

const MainForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Optionally reset the form:
    // setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#00ABAC1A] p-4 rounded-[15px] h-full  overflow-hidden "
    >
      <div className="mb-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white p-2  rounded-[8px] placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white p-2  rounded-[8px]  placeholder:text-[12px]  focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white p-2  rounded-[8px]  placeholder:text-[12px]  focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
        />
      </div>
      <div className="mb-4 flex flex-col h-56">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full flex-1 bg-white p-2  rounded-[8px]  placeholder:text-[12px]  focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
        />
      </div>
      <button
        type="submit"
        className="bg-[#00ABAC] text-white font-semibold py-2 px-4 rounded-full transition-colors hover:bg-[#009ca6] cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default MainForm;
