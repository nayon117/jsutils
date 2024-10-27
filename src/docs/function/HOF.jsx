import CodeBlock from "../../components/codeBlock";

const higherOrderFunction = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Higher-Order Functions</h1>

      <p className="text-lg text-gray-700 mb-6">
        A higher-order function is a function that takes another function as an argument, returns a function, or both. They are commonly used for functional programming in JavaScript.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use higher-order functions when you want to abstract over actions, create reusable code, or manipulate other functions. They are widely used in array methods like `.map()`, `.filter()`, and `.reduce()`.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function higherOrderFunction(callback) {\n  // function body\n  callback();\n}`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">
        Higher-order functions can take multiple parameters, including other functions (callbacks) to be executed within their body.
      </p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        They can return functions, allowing you to create dynamic behavior based on input parameters.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`function greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\nfunction higherOrderGreet(callback, name) {\n  return callback(name);\n}\n\nconsole.log(higherOrderGreet(greet, "Alice")); // Output: "Hello, Alice!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Higher-Order Functions</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a function that returns another function.</h3>
      <p className="my-3">Description: Write a higher-order function that returns a greeting function.</p>
      <CodeBlock code={`function createGreeting(greeting) {\n  return function(name) {\n    return \`\${greeting}, \${name}!\`;\n  };\n}\n\nconst helloGreeting = createGreeting("Hello");\nconsole.log(helloGreeting("Bob")); // Output: "Hello, Bob!"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Use array methods with higher-order functions.</h3>
      <p className="my-3">Description: Use `.map()` to transform an array of numbers by doubling each value.</p>
      <CodeBlock code={`const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(function(num) {\n  return num * 2;\n});\nconsole.log(doubled); // Output: [2, 4, 6, 8]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a higher-order function that takes an array of numbers and a function, and applies the function to each number in the array.</li>
        <li className="mt-2">Exercise 2: Create a higher-order function that accepts a number and returns a function that adds that number to its argument.</li>
      </ul>
    </div>
  );
};

export default higherOrderFunction;
