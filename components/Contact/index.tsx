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
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Send us a Message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team will get back to you ASAP via email.
              </p>
              <form method="post">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={message.name}
                        onChange={(e) =>
                          setMessage({ ...message, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={message.email}
                        onChange={(e) =>
                          setMessage({ ...message, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={message.msg}
                        onChange={(e) =>
                          setMessage({ ...message, msg: e.target.value })
                        }
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-5 px-4">
                    <button
                      onClick={(e) => handleSubmit(e)}
                      disabled={
                        message.email == "" ||
                        message.msg == "" ||
                        message.name == ""
                      }
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp disabled:bg-primary disabled:text-[#fff]"
                    >
                      Submit Message
                    </button>
                    {submitted && (
                      <div className=" rounded-lg bg-[#0dbc0a] p-2 px-5 text-[#ffffff]">
                        Your form is submitted successfully
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
