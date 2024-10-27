import CodeBlock from "../../components/codeBlock";

const mapMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.map()</h1>

      <p className="text-lg text-gray-600 mb-6">
        The .map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
      </p>

      <h2 className="text-xl font-semibold my-3">Use Cases</h2>
      <p className="my-3">
        Use .map() when you want to transform each element of an array into a new format, such as converting data or extracting specific properties.
      </p>

      <h2 id="syntax" className="text-xl font-semibold my-3">Syntax</h2>
      <CodeBlock code={`array.map(callback(element, index, array), thisArg);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback</strong>: Function that is called for each element.</li>
        <li><strong>thisArg (optional)</strong>: Value to use as this when executing the callback.</li>
      </ul>

      <h2 className="text-xl font-semibold my-3">Return Value</h2>
      <p className="my-3">
        Returns a new array with each element transformed by the callback function.
      </p>

      <h2 id="example" className="text-xl font-semibold my-3">Example</h2>
      <CodeBlock code={`const numbers = [1, 2, 3];\nconst doubled = numbers.map(number => number * 2);\nconsole.log(doubled); // Output: [2, 4, 6]`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .map()</h2>

      <h3 className="text-lg font-semibold my-3">Problem 1: Convert an array of strings to uppercase.</h3>
      <p className="my-3">Description: Given an array of strings, use .map() to convert all elements to uppercase.</p>
      <CodeBlock code={`const words = ["hello", "world", "javascript"];\nconst uppercased = words.map(word => word.toUpperCase());\nconsole.log(uppercased); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Extract names from an array of objects.</h3>
      <p className="my-3">Description: Given an array of objects representing users, use .map() to extract only the names.</p>
      <CodeBlock code={`const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\nconst names = users.map(user => user.name);\nconsole.log(names); // Output: ["Alice", "Bob", "Charlie"]`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use .map() to create an array of initials from an array of full names (e.g., [&quot;John Doe&quot;, &quot;Jane Smith&quot;] should become [&quot;J.D.&quot;, &quot;J.S.&quot;]).</li>
        <li className="my-3">Exercise 2: Use .map() to multiply each number in an array by its index (e.g., [5, 10, 15] should become [0, 10, 30]).</li>
      </ul>
    </div>
  );
};

export default mapMethod;
