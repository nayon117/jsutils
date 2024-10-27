import CodeBlock from "../../components/codeBlock";

const iifeMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Immediately Invoked Function Expressions (IIFE)</h1>

      <p className="text-lg text-gray-700 mb-6">
        An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a common pattern used to create a new scope to avoid polluting the global scope.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use IIFEs when you want to encapsulate your code and create a private scope, especially in larger applications or when avoiding variable clashes in the global namespace.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`(function() { /* code here */ })();`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">
        IIFEs can take parameters, just like any regular function. You can pass values when invoking the function.
      </p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        IIFEs can return values just like regular functions. The return value can be used immediately after the invocation if needed.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const result = (function(a, b) {\n  return a + b;\n})(5, 10);\nconsole.log(result); // Output: 15`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with IIFE</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a private counter.</h3>
      <p className="my-3">Description: Use an IIFE to create a counter that is not accessible from the global scope.</p>
      <CodeBlock code={`const counter = (function() {\n  let count = 0;\n  return {\n    increment: function() { count++; },\n    getCount: function() { return count; }\n  };\n})();\n\ncounter.increment();\nconsole.log(counter.getCount()); // Output: 1`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Execute a function and return a value immediately.</h3>
      <p className="my-3">Description: Use an IIFE to execute a function and return the result immediately.</p>
      <CodeBlock code={`const value = (function() {\n  return "Hello, IIFE!";\n})();\nconsole.log(value); // Output: "Hello, IIFE!"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an IIFE that logs a message to the console.</li>
        <li className="mt-2">Exercise 2: Write an IIFE that takes two numbers and returns their product.</li>
      </ul>
    </div>
  );
};

export default iifeMethod;
