import CodeBlock from "../../components/codeBlock";

const callMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.call()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .call() method calls a function with a given `this` value and arguments provided individually.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .call() when you need to invoke a function with a specific context, especially when passing in arguments individually.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function.call(thisArg, arg1, arg2, ...);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>thisArg</strong>: The value to use as `this` when executing the function.</li>
        <li><strong>arg1, arg2, ... (optional)</strong>: Arguments to be passed to the function.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the result of the function call. If the function does not return a value, it returns `undefined`.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const obj = { num: 42 };\nconst getNum = function() {\n  return this.num;\n};\nconsole.log(getNum.call(obj)); // Output: 42`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .call()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Invoke a method with a different context.</h3>
      <p className="my-3">Description: Use .call() to invoke a method of one object with another object as its context.</p>
      <CodeBlock code={`const person = {\n  name: "Bob",\n  greet() {\n    return "Hello, " + this.name;\n  }\n};\nconst anotherPerson = { name: "Alice" };\nconsole.log(person.greet.call(anotherPerson)); // Output: "Hello, Alice"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Calculate with varying arguments.</h3>
      <p className="my-3">Description: Use .call() to calculate the sum of two numbers using a single function.</p>
      <CodeBlock code={`function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum.call(null, 5, 10)); // Output: 15`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes two numbers and returns their product, and use .call() to calculate the product with different arguments.</li>
        <li className="mt-2">Exercise 2: Write a function that returns the full name of a person, and use .call() to invoke it with different name objects.</li>
      </ul>
    </div>
  );
};

export default callMethod;
