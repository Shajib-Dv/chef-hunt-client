/** @format */

import React, { useState } from "react";
import { BsFillSendPlusFill } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const MySwal = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    MySwal.fire({
      title: <strong>Thanks dude</strong>,
      html: <i>We just received your mail</i>,
      icon: "success",
    });
  };
  const handleSend = () => {};

  return (
    <div className="md:w-4/5 bg-[rgb(0,0,0,0.5)] mx-auto px-4 py-8">
      <h1 className="text-4xl text-yellow-500 font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="input-txt"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="input-txt"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="input-txt"
            id="message"
            rows="6"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSend}
            className="button gap-4 items-center justify-center px-6 text-2xl"
            type="submit"
          >
            Send <BsFillSendPlusFill />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
