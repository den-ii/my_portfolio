import { BsPersonBoundingBox } from "react-icons/bs";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import Section from "../section";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="px-5 md:px-20 relative">
      <Section className="min-h-[100vh] flex flex-col  justify-center">
        <div className="flex items-center text-3xl text-primary-100 dark:text-gray-100 justify-center font-bold gap-2">
          <BsPersonBoundingBox size={34} className="dark:text-dark-secondary" />
          About Me
        </div>
        <div className="font-Poppins text-gray-600 dark:text-gray-100 mt-3 ">
          My name is Deni Wisdom Ochiche. I'm a creative and detail-oriented
          fullstack developer with more than 2 years of experience in building
          responsive and user-friendly websites and applications. I specialize
          in html, css, javascript, and various frontend frameworks such as
          react and vuejs, I also work at the backend with nodejs, express and
          mongodb and have knowledge of devops technologies like github actions,
          docker, kubernetes and aws, other things I may be familiar with
          includes: python and C. I really want to know more about them in the
          future. I'm great at using documentations, I think it's really
          important because new technologies are always coming up and you can't
          really master all. I have a strong passion for creating intuitive and
          visually appealing designs that enhance the user experience. My
          technical skills are complemented by my ability to work
          collaboratively with cross-functional teams to deliver high-quality
          results. When I'm not coding, you can find me watching football or
          playing football. Let's connect and talk about your next project!
          <div className="flex justify-center gap-3 mt-5">
            <a href="https://www.linkedin.com/in/denioch/">
              <FaLinkedin
                size={24}
                className="text-primary-100 dark:text-gray-100 dark:hover:text-dark-secondary cursor-pointer"
              />
            </a>
            <a href="https://github.com/juicio8">
              <FaGithub
                size={24}
                className="text-primary-100 dark:text-gray-100 dark:hover:text-dark-secondary cursor-pointer"
              />
            </a>
            <a href="https://leetcode.com/deni_j/">
              <SiLeetcode
                size={24}
                className="text-primary-100 dark:text-gray-100 dark:hover:text-dark-secondary cursor-pointer"
              />
            </a>

            {/* <button className="bg-primary-100 px-2 py-2 mt-4 rounded-lg font-bold text-gray-100 dark:text-primary-100 dark:bg-dark-secondary">
              Chat Me Up!
            </button> */}
          </div>
        </div>
      </Section>
      <div className="hidden md:block absolute -left-40 bottom-0 -rotate-45 -z-1">
        <BsFillTriangleFill
          size={250}
          className="text-primary-100 dark:text-dark-secondary"
        />
      </div>
    </section>
  );
};

export default About;
