// src/components/MainForm.jsx
import React, { useState } from "react";

import dynamic from "next/dynamic";
import animationSub from "../../animation/form-submitted.json"; // ma
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function MainForm() {
  // replace with your own Formspree form ID
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // build a FormData payload
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        // Formspree returns errors in an `errors` array
        setStatus("error");
        setErrorMessage(
          json.errors?.map((err) => err.message).join(", ") ||
            "Submission failed."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-[#00ABAC1A] p-4 rounded-[15px] space-y-4 h-full">
      {status === "success" ? (
        <div className="flex justify-center items-center h-full">
          <div className="w-56 ">
            <Lottie
              animationData={animationSub}
              loop={true} // play only once
              autoplay
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
            className="w-full bg-white p-2 rounded-[8px] placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
            className="w-full bg-white p-2 rounded-[8px] placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
            className="w-full bg-white p-2 rounded-[8px] placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
            className="w-full h-40 bg-white p-2 rounded-[8px] placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-[#00ABAC]"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#00ABAC] text-white font-semibold py-2 px-4 rounded-full transition-colors hover:bg-[#009ca6] disabled:opacity-50"
          >
            {status === "submitting" ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-600">Error: {errorMessage}</p>
      )}
    </div>
  );
}
