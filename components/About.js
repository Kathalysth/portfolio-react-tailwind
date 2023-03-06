import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";

function About() {
  const me = "Chris Ehigimetor";
  const role = "Software  Engineer";
  return (
    <section id="about" className="min-h-screen">
      <div className="pt-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">
              About Me
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
              Better design, better experience
            </p>
            <div className="text-center py-10 flex flex-wrap">
              <div className="w-full md:w-1/2">
                <p
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="text-md mb-4 text-justify py-5 leading-8 text-gray-800 w-full dark:text-gray-200 max-w-xl mx-auto md:text-xl"
                >
                  {` A highly motivated and dedicated software developer with experience in Node.js, React.js, JavaScript, Java, and C#. Possesses strong problem-solving skills and a passion for coding. A quick learner with a strong drive to constantly improve and expand upon existing skills and knowledge. Demonstrates expertise in developing and maintaining high-quality applications, ensuring they meet project requirements and customer expectations. A team player with excellent communication skills, capable of working collaboratively with cross-functional teams to deliver successful projects on time and within budget. Overall, an exceptional software developer who is dedicated to delivering top-notch solutions and continuously improving my craft.`}
                </p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start items-start gap-4 md:pl-8">
                <div className="mx-auto md:mx-0 flex justify-center relative overflow-hidden">
                  <Image
                    src="/my-portrait.jpg"
                    className="rounded-xl"
                    objectFit="cover"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3
                    data-aos="fade-up-left"
                    data-aos-once="true"
                    className="text-2xl text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
                  >
                    {me}
                  </h3>
                  <p
                    data-aos="fade-up-right"
                    data-aos-once="true"
                    className="text-sm font-semibold leading-6 text-teal-600"
                  >
                    {role}
                  </p>

                  <h3
                    data-aos="fade-up-left"
                    data-aos-once="true"
                    className="text-lg my-2 text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
                  >
                    Connect With Me
                  </h3>
                  <p
                    data-aos="fade-up-right"
                    data-aos-once="true"
                    className="dark:text-white leading-6 text-justify"
                  >
                    Looking to collaborate on a project or simply chat about
                    software engineering? Let&apos;s connect! You can find me
                    coding away at my desk, tinkering with new technologies, or
                    exploring the great outdoors. Whether you&apos;re a fellow
                    developer, a business owner, or just someone who shares my
                    passion for technology, I&apos;m always eager to meet new
                    people and learn from their experiences. So, let&apos;s grab
                    a virtual coffee, share ideas, and build something great
                    together!
                  </p>
                  <div className="mt-4 flex justify-center gap-4 p-2 rounded-xl dark:bg-gray-800/[0.8] text-gray-300 bg-slate-100/[0.5]">
                    <a
                      className="hover:text-blue-500 dark:hover:bg-white  "
                      href="https://twitter.com/bishopsirhchris"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillTwitterCircle size={24} />
                    </a>
                    <a
                      className="hover:text-blue-500 dark:hover:bg-white  "
                      href="https://www.linkedin.com/in/ambassador-chris-ehigimetor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin size={24} />
                    </a>
                    <a
                      className="hover:text-black dark:hover:text-white"
                      href="https://github.com/kathalysth"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
