/** @format */

import React from "react";
import { BsFillFilePdfFill } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <div className="flex justify-center my-6">
        <button className="btn button items-center justify-center gap-2 text-2xl">
          Save as pdf <BsFillFilePdfFill />
        </button>
      </div>
      <div className="blog space-y-2">
        <h1 className="blog-title">
          Differences between uncontrolled and controlled components ?
        </h1>
        <p className="text-white">
          Uncontrolled components are components that manage their own state
          internally, without any help from the parent component or outside
          code. This means that the component's state is not controlled or
          manipulated by external code, but rather by the user's actions.
          Uncontrolled components are often used for simple forms or inputs,
          such as a basic text input field.
        </p>
        <p>
          Controlled components, on the other hand, are components that rely on
          external code to manage their state. The state of a controlled
          component is controlled and managed by the parent component or other
          external code, rather than being managed internally by the component
          itself. This allows for greater control over the component's behavior
          and can be particularly useful for complex forms or inputs, where the
          state of the component needs to be manipulated and validated by
          external code.
        </p>
      </div>
      <div className="blog space-y-2">
        <h1 className="blog-title">
          How to validate React props using PropTypes ?
        </h1>
        <p>
          React is a popular JavaScript library for building user interfaces,
          and PropTypes is a feature that allows you to validate the types of
          props passed to a React component. In other words, PropTypes helps you
          catch bugs early by ensuring that the correct data types are being
          passed to your components.
        </p>
        <p>
          First you have to import
          <code className="text-2xl"> import PropTypes from 'prop-types';</code>
        </p>
        <p>
          To validate your props use
          <code className="text-2xl">
            {"   "}
            MyComponent.propTypes = &#123; myProp: PropTypes.string,
            myOtherProp: PropTypes.number.isRequired&#125;,
          </code>
        </p>
        <p>
          When your component is used, React will automatically check the props
          against the defined PropTypes and throw an error if the data types do
          not match.
        </p>
      </div>
      <div className="blog space-y-2">
        <h1 className="blog-title">
          Difference between nodejs and express js ?
        </h1>
        <p>
          Node.js is a runtime environment for building network applications
          using JavaScript. Express.js is a web framework built on top of
          Node.js that simplifies the process of building web applications.
        </p>
        <p>
          Node.js is a runtime environment for executing JavaScript code outside
          of a web browser, while Express.js is a web framework built on top of
          Node.js that provides a set of high-level APIs for building web
          applications.
        </p>
        <p>
          Node.js provides a set of built-in modules and libraries for working
          with HTTP, TCP, and UDP protocols, as well as modules for working with
          file systems, databases, and more, while Express.js provides a
          streamlined approach for handling HTTP requests and responses,
          routing, middleware, and more, making it easier to build web
          applications using Node.js.
        </p>
      </div>
      <div className="blog space-y-2">
        <h1 className="blog-title">
          What is a custom hook, and why will you create a custom hook ?
        </h1>
        <p>
          A custom hook in React is a reusable piece of code that encapsulates
          logic and can be shared across different components. Custom hooks can
          be used to simplify complex logic, reuse code across multiple
          components, and abstract away implementation details. Custom hooks are
          a powerful feature of React that enable you to write more modular and
          reusable code.
        </p>
        <p>
          You should use a custom hook in React when you have logic that is
          shared across multiple components or when you want to simplify complex
          logic in your components. Custom hooks can be used to encapsulate
          logic related to fetching data from an API, handling form submissions,
          managing state, and more.
        </p>
      </div>
    </>
  );
};

export default Blog;
