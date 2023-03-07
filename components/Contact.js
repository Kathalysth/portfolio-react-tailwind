import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";

const MySwal = withReactContent(Swal);

function handleFormSubmit() {
  setIsLoading(true);
  fetch("https://formsubmit.co/ajax/ambyehigimetor@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      email: email,
      subject: "Reached out from Porfolio",
      message: messageValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      MySwal.fire({
        title: `Thank You, <strong style="text-transform: capitalize;">${nameValue}</strong>!`,
        html: `I appreciate you taking the time to reach out!`,
        icon: "success",
      });
      setEmail("");
      setMessage("");
      setName("");
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      MySwal.fire("Something went wrong!", "Please try again!", "error");
    });
}

function Contact() {
  const [nameValue, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");
  return (
    <section id="letsTalk" className="py-10 px-4 md:px-10 lg:px-30">
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
                    className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
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
                    required
                    title="Company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    name="company"
                    placeholder="Your Company"
                    className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
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
                    placeholder="web@example.com"
                    className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                  />
                </div>
                <div className="w-full md:w-6/12 flex flex-col mb-4">
                  <label
                    className="mb-2 text-gray dark:text-white"
                    htmlFor="email"
                  >
                    Phone
                  </label>
                  <input
                    required
                    title="Phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    placeholder="(234)-4454-233"
                    className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
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
                  className="resize-none p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                />
              </div>
              <div className="w-full">
                <button
                  className="bg-teal-500 w-100 block text-white p-2 w-full rounded-lg"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "...Please Wait" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
