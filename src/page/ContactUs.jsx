import { Helmet } from "react-helmet";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EmailJS_Service_ID,
        import.meta.env.VITE_EmailJS_Template_ID,
        form.current,
        import.meta.env.VITE_EmailJS_Public_Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Email failed to send:", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Helmet>
        <title>Streamly || Contact Us</title>
      </Helmet>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JpsTjYf/BD-en-20241125-TRIFECTA-perspective-27f3ce45-f067-41fa-962f-9812262a5ba4-large.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md p-8 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Contact Us
            </h2>
            {/* Form */}
            <form ref={form} className="card-body" onSubmit={sendEmail}>
              <label className="label">Name</label>
              <input
                type="text"
                name="from_name"
                className="input input-bordered text-black dark:text-white"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered  text-black dark:text-white"
                name="user_email"
                required
              />
              <label className="label">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered textarea-md w-full max-w-xs text-black dark:text-white"
                required
              />
              <input type="submit" className=" btn" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default ContactUs;
