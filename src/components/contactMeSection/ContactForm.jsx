import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-white"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          email="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
