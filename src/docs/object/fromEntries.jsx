import CodeBlock from "../../components/codeBlock";

const ObjectFromEntriesMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.fromEntries()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.fromEntries()</code> method transforms a list of key-value pairs into an object. This method is particularly useful for converting data structures such as arrays or maps into a standard JavaScript object.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.fromEntries()</code> when you need to convert an iterable (like an array of entries) into an object, making it easier to work with data in object format.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.fromEntries(iterable);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>iterable</strong>: An iterable object, such as an array or map, where each element is an array with two elements: a key and a value.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new object constructed from the provided iterables key-value pairs.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Converting an Array of Entries</h3>
      <CodeBlock code={`const entries = [['name', 'Alice'], ['age', 25]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // Output: { name: 'Alice', age: 25 }`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Converting a Map to an Object</h3>
      <CodeBlock code={`const map = new Map([['brand', 'Toyota'], ['model', 'Camry']]);\nconst carObj = Object.fromEntries(map);\nconsole.log(carObj); // Output: { brand: 'Toyota', model: 'Camry'}`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Handling Nested Arrays</h3>
      <CodeBlock code={`const nestedEntries = [['name', 'Bob'], ['skills', ['JavaScript', 'React']]];\nconst person = Object.fromEntries(nestedEntries);\nconsole.log(person); // Output: { name: 'Bob', skills: ['JavaScript', 'React'] }`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.fromEntries()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create an Object from URL Parameters</h3>
      <p className="my-3">Description: Use <code>Object.fromEntries()</code> to convert URL parameters into an object.</p>
      <CodeBlock code={`const urlParams = new URLSearchParams('?name=Alice&age=25');\nconst paramsObj = Object.fromEntries(urlParams);\nconsole.log(paramsObj); // Output: { name: 'Alice', age: '25' }`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Convert a Nested Array to an Object</h3>
      <p className="my-3">Description: Convert an array of key-value pairs into an object.</p>
      <CodeBlock code={`const data = [['x', 10], ['y', 20], ['z', 30]];\nconst dataObj = Object.fromEntries(data);\nconsole.log(dataObj); // Output: { x: 10, y: 20, z: 30 }`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Convert a simple array of entries into an object.</li>
        <li className="mt-2">Exercise 2: Create an object from a Map containing different data types.</li>
        <li className="mt-2">Exercise 3: Write a function that takes an array of entries and returns the corresponding object using <code>Object.fromEntries()</code>.</li>
      </ul>
    </div>
  );
};

export default ObjectFromEntriesMethod;
