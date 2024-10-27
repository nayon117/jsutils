import CodeBlock from "../../components/codeBlock";

const ObjectValuesMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.values()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.values()</code> method returns an array of a given object&apos;s own enumerable property values, in the same order as that provided by a for...in loop. This method is useful for retrieving all the values from an object, allowing you to iterate over them or perform operations on the values.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.values()</code> when you need to extract values from an object for iteration, mapping, or when you want to perform operations based on the values.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.values(obj);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">The <code>Object.values()</code> method takes a single parameter, the object you want to retrieve values from.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns an array of values representing the object&apos;s own enumerable property values.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Object</h3>
      <CodeBlock code={`const obj = { name: "John", age: 30, city: "New York" };\nconsole.log(Object.values(obj)); // Output: ["John", 30, "New York"]`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Using with forEach</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2, c: 3 };\nObject.values(obj).forEach(value => {\n  console.log(value);\n}); // Output: 1\n//          2\n//          3`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.values()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Calculate Sum of Values</h3>
      <p className="my-3">Description: Use <code>Object.values()</code> to calculate the sum of all numeric values in an object.</p>
      <CodeBlock code={`const obj = { a: 1, b: 2, c: 3 };\nconst sum = Object.values(obj).reduce((acc, val) => acc + val, 0);\nconsole.log(sum); // Output: 6`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Check for Existence of Value</h3>
      <p className="my-3">Description: Create a function that checks if a given value exists in the object values.</p>
      <CodeBlock code={`function valueExists(obj, value) {\n  return Object.values(obj).includes(value);\n}\n\nconst person = { name: "Alice", age: 25 };\nconsole.log(valueExists(person, 25)); // Output: true\nconsole.log(valueExists(person, "Bob")); // Output: false`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Create Object from Array of Values</h3>
      <p className="my-3">Description: Use <code>Object.values()</code> to create an object from an array of values with predefined keys.</p>
      <CodeBlock code={`const values = ["John", 30, "New York"];\nconst keys = ["name", "age", "city"];\nconst obj = {};\nkeys.forEach((key, index) => obj[key] = values[index]);\nconsole.log(obj); // Output: { name: "John", age: 30, city: "New York" }`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object representing a car and use <code>Object.values()</code> to list all its properties values.</li>
        <li className="mt-2">Exercise 2: Write a function that takes an object and returns an array of its values.</li>
        <li className="mt-2">Exercise 3: Implement a function that takes two objects and returns true if they have the same values.</li>
      </ul>
    </div>
  );
};

export default ObjectValuesMethod;
