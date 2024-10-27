import CodeBlock from "../../components/codeBlock";

const ObjectKeysMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.keys()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.keys()</code> method returns an array of a given object&apos;s own enumerable property names, in the same order as that provided by a for...in loop. This method is useful for retrieving all the keys from an object, allowing you to iterate over them or access their values.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.keys()</code> when you need to get the keys of an object for iteration, mapping, or when you want to check if certain properties exist.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.keys(obj);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">The <code>Object.keys()</code> method takes a single parameter, the object you want to retrieve keys from.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns an array of strings representing the object&apos;s own enumerable property names.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Object</h3>
      <CodeBlock code={`const obj = { name: "John", age: 30, city: "New York" };\nconsole.log(Object.keys(obj)); // Output: ["name", "age", "city"]`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Using with forEach</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2, c: 3 };\nObject.keys(obj).forEach(key => {\n  console.log(key, obj[key]);\n}); // Output: a 1\n//          b 2\n//          c 3`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.keys()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Count Properties in an Object</h3>
      <p className="my-3">Description: Use <code>Object.keys()</code> to count the number of properties in an object.</p>
      <CodeBlock code={`const obj = { name: "Alice", age: 25, job: "Developer" };\nconst count = Object.keys(obj).length;\nconsole.log(count); // Output: 3`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Log All Keys in an Object</h3>
      <p className="my-3">Description: Create a function that logs all keys of an object using <code>Object.keys()</code>.</p>
      <CodeBlock code={`function logKeys(obj) {\n  Object.keys(obj).forEach(key => {\n    console.log(key);\n  });\n}\n\nconst person = { name: "Bob", age: 30 };\nlogKeys(person); // Output: name\n//                 age`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Create an Object from Array of Keys</h3>
      <p className="my-3">Description: Use <code>Object.keys()</code> to create an object from an array of keys with a default value.</p>
      <CodeBlock code={`const keys = ["name", "age", "city"];\nconst defaultValue = "unknown";\nconst obj = {};\nkeys.forEach(key => obj[key] = defaultValue);\nconsole.log(obj); // Output: { name: "unknown", age: "unknown", city: "unknown" }`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object representing a book and use <code>Object.keys()</code> to list all its properties.</li>
        <li className="mt-2">Exercise 2: Write a function that takes an object and returns an array of its keys.</li>
        <li className="mt-2">Exercise 3: Implement a function that takes two objects and returns true if they have the same keys.</li>
      </ul>
    </div>
  );
};

export default ObjectKeysMethod;
