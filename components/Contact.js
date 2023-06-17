import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";

const MySwal = withReactContent(Swal);

function Contact() {
  const [nameValue, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");

  function handleFormSubmit() {
    setIsLoading(true);
    fetch("https://formsubmit.co/ajax/bacf26336034785b315730b1e0850da7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        email,
        subject: `${nameValue} ${
          company ? `from ${company}` : ""
        } Reached out - ${phone ? phone : ""}`,
        message: messageValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        MySwal.fire({
          title: `Thank You, <strong style="text-transform: capitalize;">${nameValue}</strong>!`,
          html: `I appreciate you taking the time to reach out!`,
          icon: "success",
          confirmButtonText: "Close",
          confirmButtonColor: "#14b8a6",
        });
        setEmail("");
        setMessage("");
        setPhone("");
        setCompany("");
        setName("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        MySwal.fire("Something went wrong!", "Please try again!", "error");
      });
  }

  return (
    <section
      id="letsTalk"
      className="relative isolate py-10 px-4 md:px-10 lg:px-30"
    >
      <div className="pt-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">
              Contact Me
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
              Have a Project in Mind? Let&apos;s Build Something Great Together!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              I&apos;m excited to hear from you and discuss how we can
              collaborate to bring your ideas to life. Whether you have a
              question about my skills or want to start a new project, feel free
              to reach out to me anytime. Let&apos;s work together to create
              something truly remarkable!
            </p>
          </div>
          <div className="w-full mt-8 flex justify-center items-center">
            <form
              //   data-aos="fade-up-left"
              //   data-aos-once="true"

              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
              }}
              className="w-full md:w-3/5 flex flex-col gap-4 justify-center"
            >
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-6/12 flex flex-col mb-4">
                  <label
                    className="mb-2 text-gray dark:text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    required
                    title="Name"
                    name="name"
                    value={nameValue}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    className="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                  />
                </div>
                <div className="w-full md:w-6/12 flex flex-col mb-4">
                  <label
                    className="mb-2 text-gray dark:text-white"
                    htmlFor="email"
                  >
                    Company (Optional)
                  </label>
                  <input
                    title="Company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    name="company"
                    placeholder="Your Company"
                    className="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-6/12 flex flex-col mb-4">
                  <label
                    className="mb-2 text-gray dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    title="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="me@mail.com"
                    className="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                  />
                </div>
                <div className="w-full md:w-6/12 flex flex-col mb-4">
                  <label
                    className="mb-2 text-gray dark:text-white"
                    htmlFor="email"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    title="Phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    placeholder="(234)-4454-233"
                    className="p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col mb-4">
                <label
                  className="mb-2 text-gray dark:text-white"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={messageValue}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  placeholder="Type a message..."
                  className="resize-none p-2 text-gray border-solid border-slate-200 dark:border-gray-700 border rounded bg-white dark:text-white dark:bg-gray-800 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <button
                  className="bg-teal-500 w-100 block text-white p-2 w-full rounded-lg"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? (
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-[1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          ></rect>
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          ></rect>
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16a34a"></stop>
              <stop offset="1" stopColor="#16a34a" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16a34a"></stop>
              <stop offset="1" stopColor="#16a34a" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Contact;
