import CodeBlock from "../../components/codeBlock";

const bindMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.bind()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .bind() when you need to ensure that a function retains its context, especially when passing it as a callback in an event handler or when using methods in different contexts.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function.bind(thisArg, arg1, arg2, ...);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>thisArg</strong>: The value to be passed as the `this` parameter to the target function.</li>
        <li><strong>arg1, arg2, ... (optional)</strong>: Predefined arguments to be passed to the function when it is invoked.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new function that, when called, has its `this` keyword set to the provided value, with the specified arguments.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const obj = { num: 42 };\nconst getNum = function() {\n  return this.num;\n};\nconst boundGetNum = getNum.bind(obj);\nconsole.log(boundGetNum()); // Output: 42`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .bind()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Retain context in a callback.</h3>
      <p className="my-3">Description: Use .bind() to retain the context of an object in a callback function.</p>
      <CodeBlock code={`const person = {\n  name: "Alice",\n  greet() {\n    console.log("Hello, " + this.name);\n  }\n};\nconst greet = person.greet.bind(person);\ngreet(); // Output: "Hello, Alice"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Predefine function arguments.</h3>
      <p className="my-3">Description: Use .bind() to create a function with a predefined argument.</p>
      <CodeBlock code={`function multiply(a, b) {\n  return a * b;\n}\nconst double = multiply.bind(null, 2);\nconsole.log(double(5)); // Output: 10`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes a string and returns a greeting message, using .bind() to set the greeting context.</li>
        <li className="mt-2">Exercise 2: Write a function that adds two numbers, and use .bind() to create a function that adds a specific number to any given number.</li>
      </ul>
    </div>
  );
};

export default bindMethod;
