import React from "react";
import Section from "../section";

const Home = () => {
  return (
    <Section className="px-5 md:px-20 h-screen bg-primary-100 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
      <h1 className="font-bold font-Poppins text-5xl text-center text-gray-100">
        Software Engineer
      </h1>
      <p className="mt-3 text-center text-lg text-bold font-Poppins text-gray-200 dark:text-dark-secondary">
        I build scalable and complex products
      </p>
      <div className="bg-gray-100 flex flex-wrap justify-center items-center mt-5 p-2 gap-3 rounded-lg">
        <a href="https://web.dev/learn/css/" target="_blank">
          <img src="/css-icon.svg" className="w-6" title="css" alt="css" />
        </a>
        <a href="https://www.w3schools.com/js/" target="_blank">
          <img
            className="w-6 h-6"
            src="/javascript-programming-language-icon.svg"
            title="javascript"
            alt="javascript"
          />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img
            className="w-6 h-6"
            src="/typescript-programming-language-icon.svg"
            title="typescript"
            alt="typescript"
          />
        </a>
        <a href="https://sass-lang.com/" target="_blank">
          <img
            className="w-6 h-6"
            src="/sass-icon.svg"
            title="sass"
            alt="sass"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            className="w-6 h-6"
            src="/tailwind-css-icon.svg"
            title="tailwind"
            alt="tailwind"
          />
        </a>

        <a href="https://getbootstrap.com/" target="_blank">
          <img
            src="/bootstrap-5-logo-icon.svg"
            className="w-6 h-6"
            title="bootstrap"
            alt="bootstrap"
          />
        </a>
        <a href="https://jquery.com/" target="_blank">
          <img
            src="/jquery-icon.svg"
            className="w-6 h-6"
            title="jquery"
            alt="jquery"
          />
        </a>
        <a href="https://www.mysql.com/" target="_blank">
          <img
            src="/mysql-icon.svg"
            className="w-6 h-6"
            title="mysql"
            alt="mysql"
          />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img
            src="/vue-js-1.svg"
            className="w-6 h-6"
            title="nodejs"
            alt="nodejs"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank">
          <img
            src="/react-js-icon.svg"
            className="w-6 h-6"
            title="react"
            alt="react"
          />
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <img src="/redux.svg" className="w-6 h-6" title="redux" alt="redux" />
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <img
            src="/nextjs-icon.svg"
            className="w-6 h-6"
            title="nextjs"
            alt="nextjs"
          />
        </a>
        <a href="https://storybook.js.org/" target="_blank">
          <img
            src="/sb.svg"
            className="w-6 h-6"
            title="storybook"
            alt="storybook"
          />
        </a>
        <a href="https://jestjs.io/" target="_blank">
          <img
            src="/jest-js-icon.svg"
            className="w-6 h-6"
            title="jest"
            alt="jest"
          />
        </a>
        <a href="https://firebase.google.com/" target="_blank">
          <img
            className="w-6 h-6"
            src="/fb2.png"
            title="firebase"
            alt="firebase"
          />
        </a>
        <a href="https://graphql.org/" target="_blank">
          <img
            className="w-6 h-6"
            src="/gql.png"
            title="graphql"
            alt="graphql"
          />
        </a>
        {/* <a href="https://git-scm.com/" target="_blank">
          <img src="/git-icon.svg"  title="git" alt="git" />
        </a> */}
        <a href="https://github.com/" target="_blank">
          <img
            src="/github-icon (2).svg"
            className="w-6 h-6"
            title="github"
            alt="github"
          />
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <img
            src="/node.png"
            className="w-10 h-6"
            title="nodejs"
            alt="nodejs"
          />
        </a>
        {/* 
        <a href="https://github.com/" target="_blank">
          <img
            src="/mongodb.svg"
            className="w-8 h-8 -ml-1"
            title="nodejs"
            alt="nodejs"
          />
        </a> */}
        <a href="https://www.docker.com/" target="_blank">
          <img
            src="/dock.png"
            className="w-8 h-6"
            title="docker"
            alt="docker"
          />
        </a>
        <a href="https://kubernetes.io/" target="_blank">
          <img
            src="/kb.png"
            className="w-6 h-6"
            title="kubernetes"
            alt="kubernetes"
          />
        </a>
        <a href="https://aws.amazon.com/" target="_blank">
          <img src="/awss.png" className="w-8 h-6" title="aws" alt="aws" />
        </a>
        {/*
        <a href="https://github.com/" target="_blank">
          <img src="/framer-motion.svg" className="w-6 h-6" title="nodejs" alt="nodejs" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img src="/react-native-1.svg" className="w-12" title="nodejs" alt="nodejs" />
      </a>*/}
      </div>
    </Section>
  );
};

export default Home;
