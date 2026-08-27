"use client";
import React from "react";
import NewsLatterBox from "./NewsLatterBox";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = React.useState({
    name: "",
    email: "",
    msg: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  }, [submitted]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("/api/message", {
        message,
      })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setMessage({ name: "", email: "", msg: "" });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <div
              className="wow fadeInUp rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-8 sm:p-12 shadow-card"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">
                Need Help? Send us a Message
              </h2>
              <p className="mb-8 text-base text-body-color dark:text-gray-300">
                Our team will get back to you ASAP via email.
              </p>
              <form method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={message.name}
                      onChange={(e) =>
                        setMessage({ ...message, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:border-yellow dark:focus:ring-yellow/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={message.email}
                      onChange={(e) =>
                        setMessage({ ...message, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:border-yellow dark:focus:ring-yellow/20"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message.msg}
                    onChange={(e) =>
                      setMessage({ ...message, msg: e.target.value })
                    }
                    placeholder="Type your message here..."
                    className="w-full resize-none rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:border-yellow dark:focus:ring-yellow/20"
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={
                      message.email === "" ||
                      message.msg === "" ||
                      message.name === ""
                    }
                    className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Message
                  </button>
                  {submitted && (
                    <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      ✓ Message submitted successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
