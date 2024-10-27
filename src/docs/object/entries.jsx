import CodeBlock from "../../components/codeBlock";

const ObjectEntriesMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.entries()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.entries()</code> method returns an array of a given object&apos;s own enumerable property [key, value] pairs. This is useful for converting an object into a format that&apos;s easier to iterate over, especially when you need both the keys and values of the object.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.entries()</code> when you want to loop through an object and need access to both keys and values, such as converting an object to a Map or when you want to transform key-value pairs.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.entries(obj);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <p className="my-3">The <code>Object.entries()</code> method takes a single parameter, the object you want to retrieve entries from.</p>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns an array of [key, value] pairs representing the object&apos;s own enumerable properties.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Object</h3>
      <CodeBlock code={`const obj = { name: "John", age: 30, city: "New York" };\nconsole.log(Object.entries(obj)); // Output: [["name", "John"], ["age", 30], ["city", "New York"]]`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Using with forEach</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2, c: 3 };\nObject.entries(obj).forEach(([key, value]) => {\n  console.log(\`\${key}: \${value}\`);\n}); // Output: a: 1\n//          b: 2\n//          c: 3`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.entries()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Convert Object to Map</h3>
      <p className="my-3">Description: Use <code>Object.entries()</code> to convert an object to a Map.</p>
      <CodeBlock code={`const obj = { a: 1, b: 2, c: 3 };\nconst map = new Map(Object.entries(obj));\nconsole.log(map); // Output: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Create Object from Entries</h3>
      <p className="my-3">Description: Use <code>Object.entries()</code> to create an object from an array of key-value pairs.</p>
      <CodeBlock code={`const entries = [["name", "Alice"], ["age", 25]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // Output: { name: "Alice", age: 25 }`} />

      <h3 className="text-lg font-semibold mb-2">Problem 3: Filter Entries by Value</h3>
      <p className="my-3">Description: Write a function that filters an object&apos;s entries based on a given condition.</p>
      <CodeBlock code={`function filterEntries(obj, condition) {\n  return Object.entries(obj).filter(([key, value]) => condition(value));\n}\n\nconst data = { a: 1, b: 2, c: 3, d: 4 };\nconst result = filterEntries(data, value => value > 2);\nconsole.log(result); // Output: [['c', 3], ['d', 4]]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object representing a student and use <code>Object.entries()</code> to list all its properties and values.</li>
        <li className="mt-2">Exercise 2: Write a function that takes an object and returns an array of its entries.</li>
        <li className="mt-2">Exercise 3: Implement a function that takes an object and a number, and returns an array of entries where the values are greater than that number.</li>
      </ul>
    </div>
  );
};

export default ObjectEntriesMethod;
